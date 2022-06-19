(function(){


const Template = Component.buildComponentTemplate(`

    <div class="card m-5">
      <header class="card-header">
        <h1
          id="title"
          class="card-header-title title is-3"
        >
          Lorem Ipsum
        </h1>
      </header>
      <div class="card-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>

`);


class PageComponent extends Component {

  constructor() {
    super(Template);
  }
}

Component.register('avc-page',PageComponent);

})();