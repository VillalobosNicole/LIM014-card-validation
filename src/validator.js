   
const validator = {
     isValid : (creditCardNumber) => {
        const creditCard = creditCardNumber.split('').reverse(); //hacemos un array y lo revertimos
        // eslint-disable-next-line no-console
       // console.log('Reverse : ', creditCard);
        let sumPairs = 0;
        let sumImpairs =0;
       /*  let p = [];
        let im = []; */
        let count = 0;
        for(let i= 0; i<(creditCard.length); i++){
            let number = parseInt(creditCard[i]);
            count ++;
            if(count == 2){
                let multiply = number*2;
                if(multiply>=10){
                   let digit =  multiply + ""; //lo convierto a string para tomar sus posiciones
                   sumPairs+= parseInt(digit[0]) + parseInt(digit[1]);


                }else {
                    sumPairs+= number*2;
                }
               
                count = 0;
                // p.push(number)
            }else {
                sumImpairs += number;
                // im.push(number)
            }
        }

        // eslint-disable-next-line no-console
        // console.log('Par : ', p);
        // eslint-disable-next-line no-console
        // console.log('Impar : ', im);
        // eslint-disable-next-line no-console
        console.log(sumPairs, sumImpairs);
        let totalSum = (sumPairs + sumImpairs) % 10;

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
          //retornamos el string uniendo los últimso 4 elementos
          return cardDigits.join('')
    }
}
  export default validator; 