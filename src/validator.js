/*   
const validator = {
    isValid : (creditCardNumber) => {
        const creditCard = creditCardNumber.split('').reverse(); //cambio mi string por un array usando split y reversa para voltear el número
        for(let i = 0 ; creditCard.length; i++) {
            if ( i % 2 == 1) {
                creditCard[i] = creditCard[i]*2;
            }
        }
    }

    let creditCardDigits =  creditCard.join('').split(''),
    let cardNumber = 0;
    for(let i = 0 ; creditCardDigits.length; i++ ) {
        cardNumber += parseInt(creditCardDigits[i]);
    }
     if (cardNumber % 10 == 0) {
         return true;
     } else {
         return false;
     } */

/*     //para solo mostrar los últimos 4 dígitos
    maskify : (creditCardNumber) =>  {
        const cardDigits = creditCardNumber.split(''); //cambimos el string a array 
        for(let i=0; i<cardDigits.length - 4; i++){//recorremos con el for menos los últimos 4 dígitos{
         cardDigits[i]="*"; //reemp con *
          }
          //retornamos el string uniendo los últimso 4 elementos
          return cardDigits.join('')
    }
  };
  
  export default validator; */