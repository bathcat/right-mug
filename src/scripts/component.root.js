(function(){


const Template = Component.buildTemplate(`
  <avc-error></avc-error>
  <avc-navbar></avc-navbar>
  <div id="routerOutlet">
    <avc-home></avc-home>
  </div>
  <avc-footer></avc-footer>

`);


class RootComponent extends Component {

  constructor() {
    super(Template);
  }
}

Component.register('avc-root',RootComponent);


})();