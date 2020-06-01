
const createNewProduc = (base, altura, col, precio_costo, precio_venta) => {

    const ionCard = document.createElement('ion-card');
    const ionCardContenc = document.createElement('ion-card-content');
    const ionItem = document.createElement('ion-item');
    const ionIconClose = document.createElement('ion-icon');
    const ionButtonClose = document.createElement('ion-button');
  
  
  
    ionButtonClose.slot = "end";
    ionButtonClose.color = "tertiary";
  
    ionItem.color = "tertiary";
  
  
    ionIconClose.name = "close-circle-outline";
  
  
  
  
    ionCardContenc.textContent = 'Base: ' + base + ' x ' + 'Altura: ' + altura
      + ' Color: ' + col + '=>  $ ' + precio_costo + '<--->' + precio_venta;
  
  
  
    ionButtonClose.appendChild(ionIconClose)
  
  
    ionItem.appendChild(ionButtonClose)
    ionCard.appendChild(ionItem)
  
    ionCard.appendChild(ionCardContenc);
    list.appendChild(ionCard);
  
  
    ionButtonClose.addEventListener('click', () => {
  
      ionCard.remove();
  
    })
  
  
  };
  