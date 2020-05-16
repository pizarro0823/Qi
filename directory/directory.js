
const widwet = document.querySelector('#lista_1')

techs = [
    {
        'title': 'Ventaneria',
        'icon': 'angular',
        'color': '#E63135',
    },
    {
        'title': 'Diviciones de Baño',
        'icon': 'css3',
        'color': '#0CA9EA'
    },
    {
        'title': 'Puertas',
        'icon': 'html5',
        'color': '#F46529'
    },

];

customElements.define('nav-home', class NavHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                      <ion-header translucent>
                        <ion-toolbar>
                          <ion-title>Seleccione</ion-title>
                        </ion-toolbar>
                      </ion-header>
                      <ion-content fullscreen>
                        <ion-list>
                        ${techs.map(tech => `
                            <ion-item button onclick="showDetail('${tech.title}')">
                              <ion-icon slot="start" name="logo-${tech.icon}" style="color: ${tech.color};"></ion-icon>
                              <ion-label>
                                <h3>${tech.title}</h3>
                              </ion-label>
                            </ion-item>
                        `).join('\n')}
                        </ion-list>
                      </ion-content>
                    `;
    }
});

const nav = document.querySelector('ion-nav');

function showDetail(title) {
    const tech = techs.find(tech => tech.title === title);
    nav.push('nav-detail', { tech });
}





customElements.define('nav-detail', class NavDetail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <ion-header translucent>
                        <ion-toolbar>
                            <ion-buttons slot="start">
                                <ion-back-button defaultHref="/"></ion-back-button>
                            </ion-buttons>
                            <ion-title>${this.tech.title}</ion-title>
                        </ion-toolbar>
                    </ion-header translucent>
                    <ion-grid>
                        <ion-row> 
                        <ion-col size-md="4" offset-md="4">
                        <ion-row>
                        <ion-col size-md="4" offset-md="4">
                          <ion-list id="lista_1">
      
                          </ion-list>
                        </ion-col>
                    </ion-row>                        
                        </ion-col>
                        </ion-row>
                    </ion-grid>
                      
                    `;
    }
   
}
);
