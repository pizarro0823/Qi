
const base = document.querySelector("#id_base");
const altura = document.querySelector("#id_altura");
const btn_calcular = document.querySelector("#id_btn_calcular");
const comboBox = document.querySelector('#id_naves');
const btn_limpiar = document.querySelector('#id_btn_limpiar');
const list = document.querySelector("#produc_list");
const comboBox_vidrio = document.querySelector('#id_vidrios');
const clor_alum = document.querySelector('#id_color_alu')
var ionCard;


const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid Data";
  alert.subHeader = "Por favor verifica tus datos ";
  alert.message = "Incorrect Base or Altura";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  return alert.present();
};

const isEmpty = str => !str.trim().length;




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
  const mtr_cabezal = db[0][color_alumnio_][23] / metro * ba;
  const mtr_sillar = db[0][color_alumnio_][24] / metro * ba;
  const mtr_jamba = db[0][color_alumnio_][25] / metro * al * n;
  const traslapes = db[0][color_alumnio_][26] / metro * al * naves;
  const enganche = db[0][color_alumnio_][27] / metro * al * naves;
  const socalo = db[0][color_alumnio_][28] / metro * ba * naves;
  const mtr2_vidrio = ba * al * db[0]['Glass'][vidrios]   ;
  const Guias = db[0]['Accesorios'][12] * naves * 4;
  const Empaque = db[0]['Accesorios'][15] * ba *  al * n;
  const Rodamientos = db[0]['Accesorios'][16] * naves;
  const chapa =db[0]['Accesorios'][13] * naves;
  const manijas = db[0]['Accesorios'][17] * naves;
  






//suma de precios por metrs
const suma_valores_costo = Math.floor( mtr_cabezal+mtr_sillar+mtr_jamba+traslapes
                                       +enganche+socalo+mtr2_vidrio +Guias+Empaque+Rodamientos+chapa+manijas).toFixed(0) ;

const precio_venta = Math.floor(suma_valores_costo * 1.60);

  if (isEmpty(ba) || isEmpty(al) || isEmpty(naves) ||isEmpty(vidrios)) {
    presentAlert();
    return;
  }

 
  createNewProduc(ba,al,color_alumnio_, suma_valores_costo,precio_venta)
  
})


btn_limpiar.addEventListener("click", () => {
  base.value = "";
  altura.value = "";
  comboBox.value = "";

  
});

