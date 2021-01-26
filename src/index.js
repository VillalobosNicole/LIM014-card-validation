
 import validator from './validator.js';
 //import Swal from 'sweetalert2';
 //const Swal = require('sweetalert2');
 

 //VISUALIZACION DE PÁGINAS 
 document.getElementById("firstPage").style.display = "block";
 document.getElementById("card").style.display = "block";
 document.getElementById("secondPage").style.display = "none";
 document.getElementById("footerProject").style.display = "none";
 let dataNumber = ''; //donde va a esatr el número de tarjeta sin los numerales 
 const showNumberInCard = document.querySelector(" .number");
 const showNameInCard = document.querySelector(" .titularName");
 //QUE SE MUESTRE SOLO LA SEGUNDA PÁGINA
 // eslint-disable-next-line no-unused-vars
 document.getElementById("btnValidate").addEventListener('click', function(){
  
    
 
      

      if(dataNumber.length != 16 || document.getElementById("ownerName").value == "" || document.getElementById("month").value == "-" || document.getElementById("year").value == "-"  ){
        // eslint-disable-next-line no-undef
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Ingrese todos los datos solicitados '
          })

          
      }else {

     

     document.getElementById("secondPage").style.display = "block";
     document.getElementById("firstPage").style.display = "none";
     document.getElementById("card").style.display = "none";
     document.getElementById("footerProject").style.display = "block";
     // eslint-disable-next-line no-console
    // console.log('Calcular :', dataNumber);
   let validate = validator.isValid(dataNumber);
   // console.log('is Lumen : ', validate)
     if(validate){
       document.getElementById('answer').innerText = 'Tarjeta válida';
     }else {
       document.getElementById('answer').innerText = 'Tarjeta inválida';
     }

    }
 
 });

 
 
 const reload = document.getElementById('reload');
 reload.addEventListener('click', function(){ 
     location.reload();
 });
  

 
  /* forma de digitar tarjeta en el input*/
 document.getElementById("cardNumber").addEventListener('keyup', (e) => {
     
    //console.log(e , dataNumber);
     if(dataNumber.length == 16 && e.key != "Backspace" ){

        document.getElementById("cardNumber").value = validator.maskify(dataNumber);
        
    }else {

   // console.log(e);

    if( !Number.isNaN ( Number(e.key) ) ){
        //Adiciono
        if ( e.key != ' '){
            dataNumber += e.key;
        }
        
    } else if( e.key == 'Backspace') {
       dataNumber =  dataNumber.substring(0,dataNumber.length-1);
    }
    //console.log(dataNumber);
    let value = validator.maskify(dataNumber);
    //console.log(value);

    showNumberInCard.textContent= value;
    document.getElementById("cardNumber").value = value;
    

    }

 if( dataNumber === ''){
     //alert("Ingresa número de tarjeta");
     showNumberInCard.textContent = " #### #### #### #### ";
 } 
});



// //Mostrando nombre del titutlar
document.getElementById("ownerName").addEventListener("keyup", (e) =>{
    let valueName = e.target.value;

    // eslint-disable-next-line no-undef
    document.getElementById("ownerName").value = valueName.replace(/[0-9]/g,"");
    showNameInCard.textContent = valueName;
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
