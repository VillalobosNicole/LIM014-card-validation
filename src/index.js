 import validator from './validator.js';
 
//VISUALIZACION DE PÁGINAS 
document.getElementById("firstPage").style.display = "block";
document.getElementById("card").style.display = "block";
document.getElementById("secondPage").style.display = "none";
document.getElementById("footerProject").style.display = "none";
let data_number = "";

//QUE SE MUESTRE SOLO LA SEGUNDA PÁGINA
// eslint-disable-next-line no-unused-vars
document.getElementById("btnValidate").addEventListener('click', function(){
    document.getElementById("secondPage").style.display = "block";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("footerProject").style.display = "block";
    // eslint-disable-next-line no-console
    console.log('Calcular :', data_number);
  let validate = validator.isValid(data_number);
  // console.log('is Lumen : ', validate)
    if(validate){
      document.getElementById('answer').innerText = 'Es Valido !!';
    }else {
      document.getElementById('answer').innerText = 'No Es Valido !!';
    }

});

const reload = document.getElementById('reload');
reload.addEventListener('click', function(){ 
    location.reload();
});

const showNumberInCard = document.querySelector(" .number");
const showNameInCard = document.querySelector(" .titularName");

/* const particionar = (x) => {
  let message = "";
  let f = x.split("");
  let count = 0;
  for (let i = 0; f.length > i; i++) {
    count++;
    if (count == 4) {
      message += f[i] + " ";
      count = 0;
    } else {
      message += f[i];
    }
  }
  return message.trimEnd();
}; */

/* forma de digitar tarjeta en el input*/
document.getElementById("cardNumber").addEventListener('keyup', (e) => {
  // eslint-disable-next-line no-console
  console.log(e);
 let valorInicial = (e.target.value).trim();
 let valueCard = validator.maskify(valorInicial); //guardando el valor del input, con target podemos acceder al valor
 data_number += e.key ;

 // eslint-disable-next-line no-console
 console.log('Data :', data_number);

 // eslint-disable-next-line no-console
 console.log(valueCard, e.target.value);
 let newValue = valueCard.replace(/[^#0-9]/g, "") //todos los dígitos que no sean números 
.replace(/\s/g, "");
//  borrando(reemp) letras u otra cosa e nuestro input
 document.getElementById("cardNumber").value = newValue;

 //eliminando espacio en blanco \s significa space
/* replace(/[^#0-9]/g, "") //todos los dígitos que no sean números 
  
 .replace(/\s/g, "") */ //reemp espacio por "nada"
/*  .replace(/([#0-9]{4})/g,"$1 ") //busca los número del 0 al 9 y los agrupa de 4 en 4 el dólar con 1 permite que en el último dígito haga un espacio & identifica lo que capturó 

 .trim(); //elimina espaciado
 */

 
 showNumberInCard.textContent = valueCard;

 if(valueCard === ''){
     alert("Ingresa número de tarjeta");
     showNumberInCard.textContent = " #### #### #### #### ";
 } 
});



//Mostrando nombre del titutlar
document.getElementById("ownerName").addEventListener("keyup", (e) =>{
    let valueName = e.target.value;

    // eslint-disable-next-line no-undef
    ownerName.value = valueName.replace(/[0-9]/g,"");
    showNameInCard.textContent = valueName;

    if(valueName === ''){
        alert("Ingresa nombre del titular");
        showNameInCard.textContent = "Lorem Ipsum";
    }
})

// Mostrando selects mes y año

const monthExpiration = document.querySelector(".monthCard");
const yearExpiration = document.querySelector(".yearCard");

document.getElementById("month").addEventListener('change', (e) => {
    monthExpiration.textContent = e.target.value;
});

document.getElementById("year").addEventListener('change', (e) => {
    yearExpiration.textContent = e.target.value;
});



// eslint-disable-next-line no-console
 console.log(validator);
