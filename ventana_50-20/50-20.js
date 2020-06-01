
const base = document.querySelector("#id_base");
const altura = document.querySelector("#id_altura");
const btn_calcular = document.querySelector("#id_btn_calcular");
const btn_limpiar = document.querySelector('#id_btn_limpiar');
const list = document.querySelector("#produc_list");
const comboBox_vidrio = document.querySelector('#id_vidrios');




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
  const ba = base.value.replace(",", ".");
  const al = altura.value.replace(",", ".");
  const vidrios = comboBox_vidrio.value;
  


  //precio por metrs
  const mtr_cabezal = db[0]['Aluminio_Natural'][18] / metro * ba;
  const mtr_sillar = db[0]['Aluminio_Natural'][19] / metro * ba;
  const mtr_jamba = db[0]['Aluminio_Natural'][20] / metro * al * n;
  const traslapes = db[0]['Aluminio_Natural'][21] / metro * al * n;
  const enganche = db[0]['Aluminio_Natural'][22] / metro * al * n;
  const socalo_inferior = db[0]['Aluminio_Natural'][23] / metro * ba * n;
  
  const mtr2_vidrio = ba * al * db[0]['Glass'][vidrios] * n;
  const Guias = db[0]['Accesorios'][0] * n * 4;
  const Empaque = db[0]['Accesorios'][3] * ba * al * n;
  const Rodamientos = db[0]['Accesorios'][4] * n;



  //suma de precios por metrs
  const suma_valores_costo = Math.floor(mtr_cabezal + mtr_sillar + mtr_jamba + traslapes
    + enganche + socalo_inferior + mtr2_vidrio + Guias + Empaque + Rodamientos).toFixed(0);

  const precio_venta = Math.floor(suma_valores_costo * 1.60);

  if (isEmpty(ba) || isEmpty(al) || isEmpty(vidrios)) {
    presentAlert();
    return;
  }

  console.log(traslapes);
  console.log(enganche);
  console.log(socalo_inferior);
 
  

  
  
  
  

  createNewProduc(ba, al, null , suma_valores_costo, precio_venta)


})


btn_limpiar.addEventListener("click", () => {
  base.value = "";
  altura.value = "";
  comboBox.value = "";
  comboBox_vidrio.value="";


});

