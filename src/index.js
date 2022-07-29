import validator from './validator.js';

  
  let botao = document.querySelector("#botao")
  let respCard = document.querySelector("#altCard")

  botão.addEventListerner("click", validadorCard)

  function validadorCard(){
    let numCard = Number(document.querySelector("#numeroDumerooCartao").value)
    console.log(numCard)

    respCard.innerText = numCard

  }

   

    //Função p colocar espaço entre os numeros do cartão
   /* const input = document.querySelector("#input-text")

    input.addEventListerner("keypress",()=> {
      let inputlength = input.value.le
    })