# Cartão de Crédito Válido

## Índice

* [1. Sobre](#1-Sobre)
* [2. Objetivo do Projeto](#2-plano-do-projeto)
* [3. Contexto Criado pela Desenvolvedora](#3-Contexto-Criado-pela-Desenvolvedora)
* [4. Funcionalidade](#4-Funcionalidade)
* [5. Projeto Final](#5-Projeto-Final)
* [6. Ferramentas Utilizadas](#6-Ferramentas-Utilizadas)
 

***

## 1. Sobre

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Objetivo do Projeto

O objetivo do projeto é criar um aplicativo da Web que permita ao usuário validar o número de um cartão de crédito. O projeto deve estar dentro de um contexto real criado pela desenvolvedora. Deverá também conter uma funcionalidade para ocultar os primeiros dígitos e deixar visível os quatro últimos.
O mesmo deve ser desenvolvido em  Js, HTML e CSS.

Este é o plano do projeto inicial, desenvolvido no Figma:

[resumo do projeto](/home/monnalisa/SAP008-card-validation/src/figma-cadvalidation-mona.png)


## 3. Contexto Criado pela Desenvolvedora

Este aplicativo foi criado para atender os clientes do Banco MF, que desejam fazer uma compra única e online; para isso eles devem solicitar um cartão de compra única no app do banco e validar neste aplicativo, informando os dados gerados.

No aplicativo, o cliente terá dois caminhos, conforme o Fluxograma abaixo:


[Fluxograma](https://github.com/MonnalisaFidelis/SAP008-card-validation/blob/main/src/fluxograma-cardvalidation-mona.png)
 


## 4. Funcionalidade

- [x] Formulário Local para inserir os dados do cartão
- [x] Botão para ativar uma verificação
- [x] Alerta com os primeiros números do cartão mascarados com # e os quatro últimos visíveis
- [x] Botão no alerta, que limpa os dados para   inserir outros, sem precisar sair do aplicativo


## 5. Projeto Final

### Imagens da ultima versão do projeto

Início

 [Inicio](https://github.com/MonnalisaFidelis/SAP008-card-validation/blob/main/src/projeto-final-card-validation-mona.png)

Cartão Válido

  [Cartão Válido](https://github.com/MonnalisaFidelis/SAP008-card-validation/blob/main/src/cartao-invalido.png)

Cartão Inválido

  [Cartão Inválido](https://github.com/MonnalisaFidelis/SAP008-card-validation/blob/main/src/cartao-valido.png)

## 6. Ferramentas Utilizadas

- HTML
- CSS
- JavaScript
- Canva
- Figma
- Git
- GitHub