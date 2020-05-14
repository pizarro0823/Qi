
const base = document.querySelector("#id_base");
const altura = document.querySelector("#id_altura");
const btn_calcular = document.querySelector("#id_btn_calcular");
const comboBox = document.querySelector('#id_naves');
const btn_limpiar = document.querySelector('#id_btn_limpiar');
const list = document.querySelector("#produc_list")

const createNewProduc = (base, altura, precio) => {

  const ionCard = document.createElement('ion-card');
  const ionCardContenc = document.createElement('ion-card-content');
  ionCardContenc.textContent = base + ' x ' + altura + ' => $ ' + precio;
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

var list_i;


btn_calcular.addEventListener('click', () => {
  
  const n = 2; 
  const metro = 6;
  const db = list_inventary
  const ba = base.value.replace(",",".");
  const al = altura.value.replace(",",".");
  const naves = comboBox.value;


  //precio por metrs
  const mtr_cabezal_744 = db[0].cabezal_744 / metro * ba;
  const mtr_sillar_744 = db[0].sillar_744 / metro * ba;
  const mtr_jamba_744 = db[0].jamba_744 / metro * al * n;
  const traslapes_744 = db[0].traslapes_744 / metro * al * naves;
  const enganche_744 = db[0].enganche_744 / metro * al * naves;
  const socalo_inferior_744 = db[0].socalo_inferior_744 / metro * al * naves;
  const socalo_superior_744 = db[0].socalo_superior_744 / metro * al * naves;
  

  



//suma de precios por metrs
const suma_valores = Math.floor( mtr_cabezal_744+mtr_sillar_744+mtr_jamba_744+traslapes_744+enganche_744+socalo_inferior_744+socalo_superior_744).toFixed(2) ;


  if (isEmpty(ba) || isEmpty(al) || isEmpty(naves)) {
    presentAlert();
    return;
  }

  createNewProduc(ba, al, suma_valores)
  
})


btn_limpiar.addEventListener("click", () => {
  base.value = "";
  altura.value = "";
  comboBox.value = "";
});





