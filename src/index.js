import validator from './validator.js';

  
  let botaoCard = document.querySelector("#botao");
  // variavel criada para trazer as informações do botão
  let respCard = document.querySelector("#respostaCartao");
//variavel criada para exibir a resposta do usuario na tela
  botaoCard.addEventListerner("click", validatorCard);
// cria um evento tipo click para chamar a função 
  
function validatorCard(){
    let numCard = document.querySelector("#numCartao").value;
    console.log(numCard);
    /*let resulttadoFinal = validadorCard.isValid(numCard);
    
  if (numCard ==="") {
    return respCard.innerText = " ENTRE COM UM NÚMERO";

  }
  else if (resulttadoFinal == true) {
    respCard.innerText = numCard + "CARTÃO VALIDO";
  }
  else {
    respCard.innerText = numCard + "CARTÃO INVÁLIDO";
    console.log(resulttadoFinal)
  }*/

  }

   



    //Função p colocar espaço entre os numeros do cartão
   /* const input = document.querySelector("#input-text")

    input.addEventListerner("keypress",()=> {
      let inputlength = input.value.le
    }*/