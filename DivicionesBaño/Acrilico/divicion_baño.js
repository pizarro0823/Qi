
const base = document.querySelector("#id_base");
const altura = document.querySelector("#id_altura");
const btn_calcular = document.querySelector("#id_btn_calcular");
const tipo_divi = document.querySelector('#idTipo_divicion');
const btn_limpiar = document.querySelector('#id_btn_limpiar');
const list = document.querySelector("#produc_list");
const comboBox_forma = document.querySelector('#idforma');
const clor_alum = document.querySelector('#id_color_alu')
let db;
let ba;
let al;
let naves = comboBox_forma.value;
let color_alumnio_ = clor_alum.value;
let suma_valores_costo
let precio_venta






const createNewProduc = (base, altura, col,tipo, precio_costo, precio_venta) => {

  const ionCard = document.createElement('ion-card');
  const ionCardContenc = document.createElement('ion-card-content');
  ionCardContenc.textContent = 'Base: ' + base + ' x ' + 'Altura: ' + altura
    + ' Color: ' + col +'Tipo:'+ tipo + '=>  $ ' + precio_costo + '<--->' + precio_venta;
  ionCard.appendChild(ionCardContenc);
  list.appendChild(ionCard);
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

const isEmpty = str => !str.trim().length;


function logi(cant) {

  db = list_inventary
  ba = base.value.replace(",", ".");
  al = altura.value.replace(",", ".");
  naves = comboBox_forma.value;
  color_alumnio_ = clor_alum.value;
 

  const n = 2;
  const metro = 6;


  const mtr_cabezal_ducha = db[0][color_alumnio_][7] / metro * ba;
  const mtr_sillar_ducha = db[0][color_alumnio_][8] / metro * ba;
  const mtr_jamba_ducha = db[0][color_alumnio_][9] / metro * al * n;
  const naves_di = db[0][color_alumnio_][10] / metro * al * cant;
  const sin_aleta_213 = db[0][color_alumnio_][11] / metro * ba / n * 3;
  const con_aleta_213 = db[0][color_alumnio_][12] / metro * ba / n;
  const mtr2_acrilico = ba * al * db[0]['acrilico'][0];
  const Barra_toallero = db[0][color_alumnio_][13] / metro * ba;
  const Empaque_213 = db[0]['Accesorios'][5] * ba * al * n;
  const Rodamientos_213 = db[0]['Accesorios'][6] * n;


  //suma de precios por metrs
  suma_valores_costo = Math.floor(mtr_cabezal_ducha + mtr_sillar_ducha + mtr_jamba_ducha + naves_di
    + con_aleta_213 + sin_aleta_213
    + mtr2_acrilico + Barra_toallero + Empaque_213 + Rodamientos_213).toFixed(0);

  precio_venta = Math.floor(suma_valores_costo * 1.60);

  
  if (isEmpty(ba) || isEmpty(al) || isEmpty(naves)) {
    presentAlert();
    return;
  }

  


}





btn_calcular.addEventListener('click', () => {

  naves = comboBox_forma.value;
  let tiponave ="";
  

  
if (naves == 4)
{
  tiponave =" Estructura (2 naves)"
  logi(4);

}if (naves == 8)
{
  tiponave ="Estructura en ( L )"
  logi(8);
}
   
 
  createNewProduc(ba, al, color_alumnio_,tiponave, suma_valores_costo, precio_venta)

  

  




})


btn_limpiar.addEventListener("click", () => {
  base.value = "";
  altura.value = "";
  comboBox.value = "";

});