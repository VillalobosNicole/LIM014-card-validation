   
const validator = {
     isValid : (creditCardNumber) => {
        const creditCard = creditCardNumber.split('').reverse(); //hacemos un array y lo revertimos
       // console.log('Reverse : ', creditCard);
        let sumPairs = 0; //summa de pares
        let sumImpairs =0; //suma de impares
       /*  let p = [];
        let im = []; */
        let count = 0; // el contador inicializa en 0
        for(let i= 0; i<(creditCard.length); i++){//ingresa al bucle for para dar el total de dígitos del string
            let number = parseInt(creditCard[i]); //parseamos para que sea number
            count ++;
            if(count == 2){ //si el contador es par ingresa
                let multiply = number*2;
                if(multiply>=10){ //ingresa si al multiplicar el resultado es mayor igual a 10
                   let digit =  multiply + ""; //lo convierto a string para tomar sus posiciones
                   sumPairs+= parseInt(digit[0]) + parseInt(digit[1]); // parseo para que sea number
                }else {
                    sumPairs+= number*2; //ingresa si al multiplicar es menor a 10
                }
               
                 count = 0; 
                // p.push(number)
            }else {
                sumImpairs += number; //suma todos los impares
                // im.push(number)
            }
        }

        // console.log('Par : ', p);
        // console.log('Impar : ', im);
        //console.log(sumPairs, sumImpairs);
        let totalSum = (sumPairs + sumImpairs) % 10; // sumo todos los números y veo si son sectionisibles por 10

        if(totalSum === 0){ 
            return true;
        }else {
            return false;
        }

       // return  ((totalSum % 10) === 0)? true : false; operador ternario 

   }, 

   //para solo mostrar los últimos 4 dígitos
    maskify : (creditCardNumber) =>  {
        const cardDigits = creditCardNumber.split(''); //cambimos el string a array 
        for(let i=0; i<cardDigits.length - 4; i++){//recorremos con el for menos los últimos 4 dígitos{
         cardDigits[i]="#"; //reemp con *
          }
          //retornamos el string uniendo los últimos 4 elementos
          return cardDigits.join('')  //.replace(/([#0-9]{4})/g,"$1 ").trimEnd()
    }
}
  export default validator; 
