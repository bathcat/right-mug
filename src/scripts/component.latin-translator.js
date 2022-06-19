(function(){


const Template = Component.buildComponentTemplate(`

    <avc-page title="Latin Translator">
      <div class="columns">
        <div class="column">
          <div class="select">
            <select>
              <option>English</option>
            </select>
          </div>
          <textarea
            class="textarea"
            placeholder="Enter text"
            rows="10"
            id="english"
          ></textarea>
        </div>
        <div class="column is-narrow">
          <button
            class="button is-primary"
            id="translate"
          >
            <span class="icon">
              <i class="fas fa-language"></i>
            </span>
            <span>Translate</span>
          </button>
        </div>
        <div class="column">
          <div class="select">
            <select>
              <option>Latin</option>
            </select>
          </div>
          <textarea
            class="textarea"
            placeholder="Translation"
            readonly
            rows="10"
            id="latin"
          ></textarea>
        </div>
      </div>
    </avc-page>

`);


class LatinTranslatorComponent extends Component {

  constructor() {
    super(Template);
  }
}

Component.register('avc-latin-translator',LatinTranslatorComponent);

})();