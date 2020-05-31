
const base = document.querySelector("#id_base");
const altura = document.querySelector("#id_altura");
const btn_calcular = document.querySelector("#id_btn_calcular");
const comboBox = document.querySelector('#id_naves');
const btn_limpiar = document.querySelector('#id_btn_limpiar');
const list = document.querySelector("#produc_list");
const comboBox_vidrio = document.querySelector('#id_vidrios');
const clor_alum = document.querySelector('#id_color_alu')







const createNewProduc = (base, altura ,col , precio_costo,precio_venta) => {

  const ionCard = document.createElement('ion-card');
  const ionCardContenc = document.createElement('ion-card-content');
  const ionItem = document.createElement('ion-item');
  const ionIconClose = document.createElement('ion-icon');
   const ionButtonClose = document.createElement('ion-button');
  

  
  ionButtonClose.slot="end";
  ionButtonClose.color="tertiary";

  ionItem.color="tertiary";


  ionIconClose.name ="close-circle-outline";
  
  
  
  
  ionCardContenc.textContent = 'Base: '+base + ' x ' +'Altura: '+ altura  
                              + ' Color: '+col+ '=>  $ '+ precio_costo +'<--->' + precio_venta;

      
                         
   ionButtonClose.appendChild(ionIconClose)  

   
   ionItem.appendChild(ionButtonClose)      
   ionCard.appendChild(ionItem)                     
                              
  ionCard.appendChild(ionCardContenc);  
  list.appendChild(ionCard);


  ionButtonClose.addEventListener('click',()=>
  {
    
    ionCard.remove();

  })
 

};





const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid Data";
  alert.subHeader = "Por favor verifica tus datos ";
  alert.message = "Incorrect Base or Altura";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  return alert.present();
};

//const isEmpty = str => !str.trim().length;




btn_calcular.addEventListener('click', () => {
  
  const db = list_inventary


  const n = 2; 
  const metro = 6;
  const ba = base.value.replace(",",".");
  const al = altura.value.replace(",",".");
  const naves = comboBox.value;
  const vidrios = comboBox_vidrio.value;
  const color_alumnio_=clor_alum.value;


  //precio por metrs
  const mtr_cabezal_744 = db[0][color_alumnio_][0] / metro * ba;
  const mtr_sillar_744 = db[0][color_alumnio_][1] / metro * ba;
  const mtr_jamba_744 = db[0][color_alumnio_][2] / metro * al * n;
  const traslapes_744 = db[0][color_alumnio_][3] / metro * al * naves;
  const enganche_744 = db[0][color_alumnio_][4] / metro * al * naves;
  const socalo_inferior_744 = db[0][color_alumnio_][5] / metro * al * naves;
  const socalo_superior_744 = db[0][color_alumnio_][6] / metro * al * naves;
  const mtr2_vidrio =ba * al * db[0]['Glass'][vidrios] * naves ;
  const Guias_7 = db[0]['Accesorios'][0] * naves * 4;
  const Empaque_7 = db[0]['Accesorios'][3] * ba *  al * n;
  const Rodamientos_7 = db[0]['Accesorios'][4] * naves;
  


  



//suma de precios por metrs
const suma_valores_costo = Math.floor( mtr_cabezal_744+mtr_sillar_744+mtr_jamba_744+traslapes_744
                                       +enganche_744+socalo_inferior_744+socalo_superior_744 
                                       +mtr2_vidrio +Guias_7+Empaque_7+Rodamientos_7 ).toFixed(0) ;

const precio_venta = Math.floor(suma_valores_costo * 1.60);

 

 
  createNewProduc(ba,al,color_alumnio_, suma_valores_costo,precio_venta)
  
})


btn_limpiar.addEventListener("click", () => {
  base.value = "";
  altura.value = "";
  comboBox.value = "";

  
});

