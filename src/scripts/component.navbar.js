(function(){

const Template = Component.buildComponentTemplate(`

    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="./index.html"
        >
          <img src="./assets/logo.png" />
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a
            class="navbar-item"
            href="./index.html"
          >
            Home
          </a>

          <span class="navbar-item">
            <button
              class="button"
              id="snakes"
              onclick="alert('xxxx')"
            >
              Snakes
            </button>
          </span>

          <span class="navbar-item">
            <button
              class="button"
              role="link"
              id="latin"
              onclick = 'navigateTo("/latin-translator")'
            >
              Latin
            </button>
          </span>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <avc-login-info></avc-login-info>
          </div>
        </div>
      </div>
    </nav>


`);


class NavbarComponent extends Component {


  constructor() {
    super(Template);
  }
}

Component.register('avc-navbar',NavbarComponent);

})();