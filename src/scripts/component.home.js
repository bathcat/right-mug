(function(){


  const Template = Component.buildComponentTemplate(`

      <avc-page title="Welcome to Acme">
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas
          feugiat luctus. Nunc rhoncus ligula urna, sed eleifend nunc semper ac.
          Fusce venenatis sit amet nisl nec faucibus. Cras ut erat id nibh viverra
          convallis. Nulla mi ex, faucibus non dui a, pretium venenatis quam. Donec
          neque lorem, tristique a lacus vel, aliquam iaculis tellus. Phasellus nec
          dictum enim. Integer nec elit eleifend justo finibus pellentesque. Nullam
          dictum lectus massa, ut placerat nisi blandit sit amet. Nullam quis
          dignissim nunc. Phasellus non lorem vel lacus hendrerit tincidunt a quis
          ex. Donec congue lobortis leo et vulputate.
        </p>

        <p>
          Aenean aliquam posuere purus, non auctor nisi feugiat quis. Phasellus dui
          quam, tincidunt tempus malesuada at, tempor hendrerit diam. Integer nec
          gravida augue. Cras eu urna consequat ipsum pretium aliquet. Aenean
          viverra tristique sem, eget aliquam lacus dictum elementum. Nunc ornare
          massa in ante porta, a feugiat ante dictum. Pellentesque a mi urna.
          Integer auctor accumsan volutpat. Phasellus vel dolor non quam
          pellentesque euismod. Vivamus porta odio ut augue pulvinar, ullamcorper
          tempus dolor feugiat. Morbi pellentesque sit amet libero sit amet mollis.
          Quisque sollicitudin ipsum eu purus faucibus, ut malesuada sapien gravida.
          Nunc sit amet leo hendrerit, accumsan quam in, hendrerit sem. Duis aliquam
          justo lobortis ante pulvinar consectetur. Nam luctus libero vel massa
          vulputate venenatis.
        </p>
      </div>
    </avc-page>

  `);


  class HomeComponent extends Component {

    constructor() {
      super(Template);
    }
  }

  Component.register('avc-home',HomeComponent);

})();