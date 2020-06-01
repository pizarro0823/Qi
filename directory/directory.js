
    techs = [
        {
          'url': 'https://pizarro0823.github.io/Qi/ventanas/ventana_744/index.html',
          'title': 'Ventanas 7_44',
        },
        {
          'url': 'https://pizarro0823.github.io/Qi/ventanas/ventana_80_25/index.html',
          'title': 'Ventanas 80-25',
        },
        {
          'url': 'https://pizarro0823.github.io/Qi/ventanas/ventana_monumental/index.html',
          'title': 'Ventanas Monumental',
        },
        {
          'url': 'https://pizarro0823.github.io/Qi/DivicionesBaño/Acrilico/index.html',
          'title': 'Divivion de Baño (Nave)',
        },
        {
          'url': 'https://pizarro0823.github.io/Qi/Puertas/puerta_t-244/index.html',
          'title': 'Puertas',
        }
]   



let currentPopover = null;

    const buttons = document.querySelectorAll('ion-button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', handleButtonClick);
    }

    async function handleButtonClick(ev) {
      popover = await popoverController.create({
        component: 'popover-example-page',
        event: ev,
        translucent: true
      });
      currentPopover = popover;
      return popover.present();
    }

    function dismissPopover() {
      if (currentPopover) {
        currentPopover.dismiss().then(() => { currentPopover = null; });
      }
    }

    customElements.define('popover-example-page', class ModalContent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
        ${techs.map(tech => `
      
            <ion-list >
            <ion-item button href="${tech.url}">${tech.title}</ion-item>
            </ion-list>
            
          `).join('\n')}
        `;
        
       

      }
    });



