const readlineSync = require('readline-sync');

console.log(`
  1 - Pipoca – 10s;
  2 - Macarrão – 8s;
  3 - Carne – 15s;
  4 - Feijão – 12s;
  5 - Brigadeiro – 8s; 
`);
let opcao = readlineSync.question('Escolha uma opção: ');
console.log(`O usuário escolheu a opção ${opcao}`);

let tempoDigitado = readlineSync.question('Escolha o tempo: ');
function microondas(opcao, tempo) {
  //if else para opção
  if (opcao == 1) {
    tempo = 10
  } else if (opcao == 2) {
    tempo = 8
  } else if (opcao == 3) {
    tempo = 15
  } else if (opcao == 4) {
    tempo = 12
  } else if (opcao == 5) {
    tempo = 8
  } else {
    console.log("Prato inexistente!")
    return
  }

  //if else para tempo

  let tempoLimite = (2 * tempo);
  let tempoKabum = (3 * tempo);

  if (tempoDigitado > tempoLimite) {
    console.log("Vixii a comida queimou!")
  } else if (tempoDigitado < tempo) {
    console.log("Tempo insuficiente")
  } else if (tempoDigitado > tempoKabum) {
    console.log("Kabummm!")
  }

  console.log('----')
}

microondas(opcao, tempoDigitado)

console.log('Prato pronto, bom apetite!!!')