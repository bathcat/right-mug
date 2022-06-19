


class Component extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static styles = `
    <style>
      @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
      @import 'https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css';
    </style>
    `;

  static buildTemplate =contents => {
    const template = window.document.createElement('template');
    template.innerHTML = contents;
    return template;
  }

  static buildComponentTemplate=contents =>{
    return Component.buildTemplate(Component.styles + contents);
  }

  static register = (name,constructor) =>{
    window.customElements.define(name,constructor);
  }
}
