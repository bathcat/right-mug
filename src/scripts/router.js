const navigateTo = 
(function(){

  function* zip(xs, ys) {
    if (!Array.isArray(xs) || !Array.isArray(ys)) {
      throw new Error('Both arguments must be arrays.');
    }

    if (xs.length !== ys.length) {
      throw new Error('Only arrays of the same length are zippable.');
    }

    for (let i = 0; i < xs.length; i++) {
      yield [xs[i], ys[i]];
    }
  }

  const routes = [
    {
      path: '/',
      getTemplate: () => '<avc-home></avc-home>',
    },
    {
      path: '/latin-translator',
      getTemplate: () => '<avc-latin-translator></avc-latin-translator>',
    },
    {
      path: '/snakes',
      getTemplate: () => '<avc-snake-list></avc-snake-list>',
    },
    {
      path: '/snakes/create',
      getTemplate: () => `<avc-snake-builder></avc-snake-builder>`,
    },
    {
      path: '/snakes/:id',
      getTemplate: ({ id }) =>
        `<avc-snake-editor snakeID='${id}'></avc-snake-editor>`,
    },
    {
      path: 404,
      getTemplate: () => '<h1>Not found</h1>',
    },
  ];

const _getSegments = urlLike => urlLike.split('/');

const _pathWildcardPrefix = ':';

const _isPathWildcard = pathSegment =>
  pathSegment.startsWith(_pathWildcardPrefix);

function _matchRoute(url, route) {
  const urlSegments = _getSegments(url);
  const pathSegments = _getSegments(route.path);
  if (urlSegments.length !== pathSegments.length) {
    return false;
  }
  const routeData = {};
  for (let [pathSegment, urlSegment] of zip(pathSegments, urlSegments)) {
    if (pathSegment === urlSegment) {
      continue;
    }
    if (_isPathWildcard(pathSegment)) {
      routeData[pathSegment.slice(1)] = urlSegment;
      continue;
    }
    return false;
  }
  return { ...route, routeData };
}

class Router {

  constructor() {
    this.routes = routes;
  }

  navigateTo(uri) {
    const route = this.getMatchingRoute(uri);
    const template = route.getTemplate(route.routeData);
    try{
      history.pushState({}, '', uri);
    }
    catch{}
    
    this.load(template);
    return false;
  }

  startWith(path) {
    const route = this.getMatchingRoute(path);
    const template = route.getTemplate(route.routeData);
    this.load(template);
    return false;
  }

  load(template) {
    //TODO: Inject this stuff into the constructor.
    const rootElement = document.querySelector('avc-root');

    const routerOutletElement =
      rootElement.shadowRoot.getElementById('routerOutlet');

    routerOutletElement.innerHTML = template;
    return false;
  }

  getMatchingRoute(url) {
    if (typeof url !== 'string') {
      throw new Error('Bad argument.');
    }
    for (let candidate of this.routes) {
      const match = _matchRoute(url, candidate);
      if (!!match) {
        return match;
      }
    }
    this.routes.find(r => r.path === 404);
  }
}

const router = new Router();

return (path)=>router.navigateTo(path);

})();
