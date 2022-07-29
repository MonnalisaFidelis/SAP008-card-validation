const validator = { isValid }


function isValid(creditCardNumber) {
  const transfCard = creditCardNumber.split("").reverse();
  //let transfCard = Array.from(revCard);
  let retCard = 0;

  for (let i = 0; i < transfCard.length; i++) {
    let numCard = parseInt(transfCard[i])

    if(i % 2 !== 0 && numCard[i]>=5){
     retCard = retCard + (numCard * 2) -9;
     console.log("1")
    }
    else if(i % 2 !== 0 && numCard[i]<=5){
      retCard = retCard + (numCard * 2);
      console.log(retCard)
     }
    else{
      retCard = retCard + numCard;
      console.log(retCard)
    }
  }

  if(retCard % 10 ===0){
    return true
  }
  else{
    return false
  }
return retCard
}
    
  
  
  
  
  /*let cardList = Array.from(creditCardNumber);
    let cardNumberReverse = cardList.reverse();
    let cardNumber = cardNumberReverse.map(Number);
    let sumAll = 0;
  
    for (let num = 0; num < cardNumber.length; num++) {
      if ((num + 1) % 2 !== 0) {
        sumAll = sumAll + cardNumber[num];
      } else {
        cardNumber[num] = cardNumber[num] * 2;
        if (cardNumber[num] > 9) {
          cardNumber[num] = cardNumber[num] - 9;
          sumAll = sumAll + cardNumber[num];
        } else {
          sumAll = sumAll + cardNumber[num];
        }
      }
    }
    return sumAll % 10 === 0;
  }



export default validator;

  /*
    isValid:
    function (logicaString){
      let cardNumb = logicaString.split("").reverse()
      let sumFinal = 0;
  
      for (let i=0; i < cardNumb.length;i++) { 
        let num = parseInt(cardNumb[i])
        if ((i % 2 !== 0) && (num>=5)){
          sumFinal = sumFinal + ((num*2)-9);
        }
        else if ((i % 2 !== 0) && (num<=5)) {
          sumFinal = sumFinal + (num *2);
        }
        else {
          sumFinal = sumFinal + (num);
        }
      }
      if (sumFinal % 10  === 0){
        return true
      }
      else {
        return false
      }
  
    },
    maskify: function (mascararNum) {
      const ultimosQuatroNum = 4
      let mascarar = ""
      for (let i = 0; i < mascararNum.length; i++) {
        if (i >= ((mascararNum.length) - ultimosQuatroNum)) {
          mascarar = mascarar + mascararNum.charAt(i)
        }
        else {
          mascarar = mascarar + "#"
        }
      }
      return mascarar
    }
  }*/
 