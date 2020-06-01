const lista_productos = document.querySelector('productos');




const mostrario  = ()=>
{

    const ionCard = document.createElement ('ion-card');
    const ionCardHeader = document.createElement ('ion-card-header');
    const ionCardSubtitle = document.createElement ('ion-card-subtitle');
    const ionCardConten = document.createElement ('ion-card-content');
    const image = document.querySelector('img');

    
    ionCardHeader.textContent= "Puertas en Alumnio"; 
    ionCardSubtitle.textContent="Color del alumnio";
    ionCardConten.textContent= "peurtas muy bomitas con exelentes acanados ";
    image.src="https://img.freepik.com/vector-gratis/icono-entrada-casa-puerta_18591-52240.jpg?size=338&ext=jpg"



   ionCard.appendChild(ionCardHeader)
   ionCard.appendChild(ionCardSubtitle)
   ionCard.appendChild(ionCardConten) 
    ionCard.appendChild(image)

    lista_productos.appendChild(ionCard)
}