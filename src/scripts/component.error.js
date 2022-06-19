(function(){


const Template = Component.buildComponentTemplate(`

<div id='avc-error' class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head is-danger">
      <p
        id="message"
        class="modal-card-title is-3"
        style="color: rgba(255, 0, 0, 0.3); font-weight: 700"
      >
        Error
      </p>
      <button
        id="close"
        class="delete"
        aria-label="close"
      ></button>
    </header>
    <section class="modal-card-body">
      <p id="details">Here are error details.</p>
    </section>
  </div>
</div>

`);


class ErrorComponent extends Component {

  constructor() {
    super(Template);
  }
}

Component.register('avc-error',ErrorComponent);


})();

const errorComponent = 
  (function(){
    function show(title,message){
       alert(`Showing: ${title}, ${message}`);
    };

    function hide(){
      alert(`Hiding`);
   };

    return {show,hide};
  })();