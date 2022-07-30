
const validator = { isValid, maskify } // funções

function isValid(creditCardNumber) {
  const transfCard = creditCardNumber.split("").reverse();
  //let transfCard = Array.from(revCard);
  let retCard = 0;

  for (let i = 0; i < transfCard.length; i++) {
    let numCard = parseInt(transfCard[i])

    if (i % 2 !== 0) { // qual a única forma de o numero ter 2 caracteres é sendo igual ou maior 5 pois 5+5=10
      let multNumCard = numCard * 2;

      if (multNumCard.length > 1) { // if para fazer o numero com 2 caracteres somar com o outro
        let arrNumCard = numCard.split("");
        let intArrCard1 = parseInt(arrNumCard[0]);
        let intArrCard2 = parseInt(arrNumCard[1]);
        multNumCard = intArrCard1 + intArrCard2;
      }
      retCard = retCard + multNumCard; // retCard dentro do for sempre será 0
      console.log(retCard);
    }
    else {
      retCard = retCard + numCard;
      console.log(retCard);
    }
  }
  if (retCard % 10 === 0) {
    return true
  }
  else {
    return false
  }

  
}

function maskify(creditCardNumber) {
  //...
};

export default validator;
