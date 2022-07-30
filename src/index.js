import validator from './validator.js';

let btnCard = document.querySelector("#botao");
let respCard = document.querySelector("#outCard");

btnCard.addEventListener('click', validadorCard);

function validadorCard() {
    let numCard = document.querySelector("#numDigitado").value; // parseInt()
    console.log(numCard);
    let resultadoFinal = validator.isValid(numCard); // argumento

    if (numCard === "") {
        return respCard.innerText = " ENTRE COM UM NÚMERO";
    }
    else if (resultadoFinal == true) {
        respCard.innerText = numCard + " CARTÃO VÁLIDO";
        console.log(resultadoFinal)
    }
    else {
        respCard.innerText = numCard + " CARTÃO INVÁLIDO";
        console.log(resultadoFinal)
    }
}