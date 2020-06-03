

const crea = (base, altura, col, precio_costo, precio_venta) => {


   let color =  "primary";


    const ionCard = document.createElement('ion-card');
    const ionCardContenc = document.createElement('ion-card-content');
    const ionItem = document.createElement('ion-item');
    const ionIconClose = document.createElement('ion-icon');
    const ionButtonClose = document.createElement('ion-button');
   

  
  
  
    ionButtonClose.slot = "end";
    ionButtonClose.color = color;
  
    ionItem.color = color;
  
  
    ionIconClose.name = "close-circle-outline";
  
  
  
  
    ionCardContenc.textContent = 'Base: ' + base + ' x ' + 'Altura: ' + altura
    + '...' +'$'+ precio_costo + '<--->' +'$'+ precio_venta;
  
  
  
    ionButtonClose.appendChild(ionIconClose)
  
  
    ionItem.appendChild(ionButtonClose)
    ionCard.appendChild(ionItem)
  
    ionCard.appendChild(ionCardContenc);
    list.appendChild(ionCard);
  
  
    ionButtonClose.addEventListener('click', () => {
  
      ionCard.remove();
  
    }) 
  
  
  };
  


async function createNewProduc(base, altura, col, precio_costo, precio_venta) {

  var agregar = "Agregar";

  const alert = await alertController.create({

    header: 'Precio Venta $  ' + precio_venta,

    message: 'Costo  $' + precio_costo,

    buttons: [
      {
        text: 'Olvidar'
      },
      {
        text: agregar, 
        handler: ()=>{
           crea(base, altura, col, precio_costo, precio_venta)
        } 
      }],


  });

  await alert.present();
}