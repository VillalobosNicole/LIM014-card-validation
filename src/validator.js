   
const validator = {
     isValid : (creditCardNumber) => {
        const creditCard = creditCardNumber.split('').reverse(); //hacemos un array y lo revertimos
        // eslint-disable-next-line no-console
        console.log('Reversa : ', creditCard);
        let suma_pares = 0;
        let suma_impares =0;
       /*  let p = [];
        let im = []; */
        let count = 0;
        for(let i= 0; i<(creditCard.length); i++){
            let numero = parseInt(creditCard[i]);
            count ++;
            if(count == 2){
                let multiplicar = numero*2;
                if(multiplicar>=10){
                   let digito =  multiplicar + ""; //lo convierto a string para tomar sus posiciones
                   suma_pares+= parseInt(digito[0]) + parseInt(digito[1]);


                }else {
                    suma_pares+= numero*2;
                }
               
                count = 0;
                // p.push(numero)
            }else {
                suma_impares += numero;
                // im.push(numero)
            }
        }

        // eslint-disable-next-line no-console
        console.log('Par : ', p);
        // eslint-disable-next-line no-console
        console.log('Impar : ', im);
        // eslint-disable-next-line no-console
        console.log(suma_pares, suma_impares);
        let suma_total = (suma_pares + suma_impares) % 10;

        if(suma_total === 0){
            return true;
        }else {
            return false;
        }

       // return  ((suma_total % 10) === 0)? true : false;

   }, 

   //para solo mostrar los últimos 4 dígitos
    maskify : (creditCardNumber) =>  {
        const cardDigits = creditCardNumber.split(''); //cambimos el string a array 
        for(let i=0; i<cardDigits.length - 4; i++){//recorremos con el for menos los últimos 4 dígitos{
         cardDigits[i]="#"; //reemp con *
          }
          //retornamos el string uniendo los últimso 4 elementos
          return cardDigits.join('')
    }
}
  export default validator; 