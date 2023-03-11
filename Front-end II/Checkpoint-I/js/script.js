const bodys = document.querySelector('body');

const container = document.querySelector('.container');

var cards = [

    {
        img:  '<img src="images/01.png">',
        titulo: '<h2>Bitcoin</h2>',
        texto: '<p> Bitcoin é uma criptomoeda livre e descentralizada, um dinheiro eletrônico para transações financeiras ponto a ponto, originalmente descrita em um artigo por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto, publicado em 31 de outubro de 2008 na lista de discussão The Cryptography Mailing.</p>'
 
     },

    {
        img:  '<img src="images/02.png">',
        titulo: '<h2>Ethereum</h2>',
        texto: '<p>Ethereum é uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain. São aplicações que funcionam exatamente como programadas sem qualquer possibilidade de censura, fraude ou interferência de terceiros, isso porque o contrato é imutável.</p>'
 
     },

     {
        img:  '<img src="images/03.png">',
        titulo: '<h2>Tether</h2>',
        texto: '<p>Tether é uma criptomoeda hospedada nas blockchains Ethereum e Bitcoin, entre outras. Seus tokens são emitidos pela empresa de Hong Kong Tether Limited, que por sua vez é controlada pelos proprietários da Bitfinex.</p>'
 
     },

     {
        img:  '<img src="images/04.png">',
        titulo: '<h2>BNB</h2>',
        texto: '<p>A Binance Coin (BNB) é mais uma criptomoeda lançada para uso dentro de uma exchange, assim como o Huobi Token e a Unus Sed Leo. Foi lançada em agosto de 2017 por uma das maiores exchanges (corretora de criptomoedas) do mundo, a Binance.</p>'
 
     },

     {
        img:  '<img src="images/05.png">',
        titulo: '<h2>Ripple</h2>',
        texto: '<p> Ripple é um sistema de liquidação bruta em tempo real, câmbio e rede de remessas desenvolvido pela Ripple. Também chamado de protocolo Ripple Transaction Protocol ou Ripple, é construído com base em um protocolo de Internet aberto distribuído, um livro-razão de consenso e uma moeda nativa chamada XRP.</p>'
 
     },
     
     {
        img:  '<img src="images/06.png">',
        titulo: '<h2>Dogecoin</h2>',
        texto: '<p>Dogecoin é uma criptomoeda peer-to-peer de código aberto criada inicialmente como uma "moeda piada" em 06 de dezembro de 2013, desenvolvendo rapidamente sua própria comunidade on-line, alcançando uma capitalização de US$ 60 milhões em janeiro de 2014.</p>'
 
     }

];


for (var i = 0; i < cards.length; i++) {

    // Cria um novo elemento div
    var card = document.createElement('div');

    // Adiciona a classe 'card' ao elemento div criado
    card.classList.add('item');

    // Adiciona o conteúdo do objeto a div
    card.innerHTML += cards[i].img + cards[i].titulo + cards[i].texto;

    // Adiciona o elemento div criado ao elemento container

    container.appendChild(card);
    
}