const inputTitulo = document.querySelector('#inputTitulo')
const inputUrlRef = document.querySelector('#userURL')
const inputDescricaoRef = document.querySelector('#userDescricao')
const loginButtonRef = document.querySelector('#loginButton')
const form = document.querySelector('.formulario')
const mensage = document.querySelector('.error')
const mensage1 = document.querySelector('.errorDescricao')

console.log(inputTitulo.value)

let formError = {
  titulo: '',
  descicao: '',
  url: ''
}

let dados = {
  titulo: '',
  url: '',
  descricao: ''

}

function validarTitulo() {
  if (inputTitulo.value.length < 4) {
    mensage.innerHTML = 'Preencha corretamente o campo Título'
    dados.titulo = inputTitulo.value.trim()
    return false
  } 

  dados.titulo = inputTitulo.value.trim()
  mensage.innerHTML = '' 

}

function validarDescricao() {

  if (inputDescricaoRef.value.length < 4) {
    mensage1.innerHTML = 'Preencha corretamente o campo Descrição'
    dados.descricao = inputDescricaoRef.value.trim()
    return false
  }
  dados.mensage1 = inputDescricaoRef.value.trim()
  mensage1.innerHTML = ''

}

function validarErro() {
   if (inputTitulo.value === '') {
     inputTitulo.style.border = '3px solid red'
   } else {
     inputTitulo.style.border = ''
   }
 }
 
 function validarErroDescricao() {
   if (inputDescricaoRef.value === '') {
     inputDescricaoRef.style.border = '3px solid red'
   } else {
     inputDescricaoRef.style.border = ''
   }
 }
 
 function validarErroUrl() {
   if (inputUrlRef.value === '') {
     inputUrlRef.style.border = '3px solid red'
   } else if (inputUrlRef.value.length > 4) {
     inputUrlRef.style.border = ''
   }
 
 }
 
inputTitulo.addEventListener('keyup', validarErro)
inputDescricaoRef.addEventListener('keyup', validarErroDescricao)
inputUrlRef.addEventListener('keyup', validarErroUrl)

inputTitulo.addEventListener('keyup', validarTitulo)
inputDescricaoRef.addEventListener('keyup', validarDescricao)


// Objeto que irá informar qual campo ainda possuí erro. Ele será muito importante para termos uma visão geral se o nosso formulário como um todo possuí algum erro ou não
// var formErrors = {
//     inputTítulo: true,
//     userURL: true,
//     userDescricao: true
// }

// Botão DARK MODE
const chk = document.getElementById("chk");
const title = document.getElementById("title");
const itens = document.getElementById("itens");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


function mudarConteudo() {
   document.getElementById("item").innerHTML +=
   `
       <div class="item">
           <img src="${item.img}">
           <h2>${item.titulo}</h2>
           <p>${item.descricao}</p>
       </div>
   `
}

// parte para add os cards
const containerRef = document.querySelector('item');
// containerRef.classList.add('item');

var cards = [

    {
        img:  '<img src="images/01.png">',
        titulo: '<h2>Bitcoin</h2>',
        descricao: '<p> Bitcoin é uma criptomoeda livre e descentralizada, um dinheiro eletrônico para transações financeiras ponto a ponto, originalmente descrita em um artigo por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto, publicado em 31 de outubro de 2008 na lista de discussão The Cryptography Mailing.</p>'
 
     },

    {
        img:  '<img src="images/02.png">',
        titulo: '<h2>Ethereum</h2>',
        descricao: '<p>Ethereum é uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain. São aplicações que funcionam exatamente como programadas sem qualquer possibilidade de censura, fraude ou interferência de terceiros, isso porque o contrato é imutável.</p>'
 
     },

     {
        img:  '<img src="images/03.png">',
        titulo: '<h2>Tether</h2>',
        descricao: '<p>Tether é uma criptomoeda hospedada nas blockchains Ethereum e Bitcoin, entre outras. Seus tokens são emitidos pela empresa de Hong Kong Tether Limited, que por sua vez é controlada pelos proprietários da Bitfinex.</p>'
 
     },

     {
        img:  '<img src="images/04.png">',
        titulo: '<h2>BNB</h2>',
        descricao: '<p>A Binance Coin (BNB) é mais uma criptomoeda lançada para uso dentro de uma exchange, assim como o Huobi Token e a Unus Sed Leo. Foi lançada em agosto de 2017 por uma das maiores exchanges (corretora de criptomoedas) do mundo, a Binance.</p>'
 
     },

     {
        img:  '<img src="images/05.png">',
        titulo: '<h2>Ripple</h2>',
        descricao: '<p> Ripple é um sistema de liquidação bruta em tempo real, câmbio e rede de remessas desenvolvido pela Ripple. Também chamado de protocolo Ripple Transaction Protocol ou Ripple, é construído com base em um protocolo de Internet aberto distribuído, um livro-razão de consenso e uma moeda nativa chamada XRP.</p>'
 
     },
     
     {
        img:  '<img src="./images/06.png">',
        titulo: '<h2>Dogecoin</h2>',
        descricao: '<p>Dogecoin é uma criptomoeda peer-to-peer de código aberto criada inicialmente como uma "moeda piada" em 06 de dezembro de 2013, desenvolvendo rapidamente sua própria comunidade on-line, alcançando uma capitalização de US$ 60 milhões em janeiro de 2014.</p>'
 
     }

];