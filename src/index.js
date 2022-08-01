import validator from './validator.js';


let btnCard = document.querySelector("#botao");
let respCard = document.querySelector("#outCard");


btnCard.addEventListener('click', validadorCard);


function validadorCard() {
  let numCard = document.querySelector("#numDigitado").value; 

  let resultMasky = validator.maskify(numCard);
  
  let resultadoFinal = validator.isValid(numCard); // argumento

  if (numCard === "") {
      return respCard.innerText = " Digite o número do cartão";
  }
  else if (resultadoFinal == true) {
     
      alert(resultMasky + " Cartão VALIDO! Liberado para Compras")
  
  }
  else {
      
      alert(resultMasky + " ERRO Número de cartão Invalido! Favor verificar")
     
  } 

      
    }


