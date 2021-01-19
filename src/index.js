 //import validator from './validator.js';
 
//VISUALIZACION DE PÁGINAS 
document.getElementById("firstPage").style.display = "block";
document.getElementById("card").style.display = "block";
document.getElementById("secondPage").style.display = "none";
document.getElementById("footerProject").style.display = "none";


//QUE SE MUESTRE SOLO LA SEGUNDA PÁGINA
// eslint-disable-next-line no-unused-vars
document.getElementById("btnValidate").addEventListener('click', function(){
    document.getElementById("secondPage").style.display = "block";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("footerProject").style.display = "block";

});

const reload = document.getElementById('reload');
reload.addEventListener('click', function(){ 
    location.reload();
});

const showNumberInCard = document.querySelector(" .number");
const showNameInCard = document.querySelector(" .titularName");

/* forma de digitar tarjeta en el input*/
document.getElementById("cardNumber").addEventListener('keyup', (e) => {
 let valueCard = e.target.value; //guardando el valor del input, con target podemos acceder al valor
 
//  borrando(reemp) letras u otra cosa e nuestro input
 document.getElementById("cardNumber").value = valueCard.
 //eliminando espacio en blanco \s significa space
 replace(/\D/g, "") //todos los dígitos que no sean números 
  
 .replace(/\s/g, "") //reemp espacio por "nada"
 .replace(/([0-9]{4})/g,"$1 ") //busca los número del 0 al 9 y los agrupa de 4 en 4 el dólar con 1 permite que en el último dígito haga un espacio

//  .replace(/([0-9])/g,"*")

 .trimEnd();//elimina el último espaciado

 const hideDigits = validator.maskify("creditCardNumber");

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
// console.log(validator);