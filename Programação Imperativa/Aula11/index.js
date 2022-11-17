//A. Acessar elementos específicos de um array.
const notas = [7.5, 9, 6.4];

console.log(notas[0])
console.log(notas[1])
console.log(notas[2])
console.log(notas[3]) //undefined

//B. Modificar cada um dos elementos de um array e imprimi-los no console.
notas[0] = 6.3;
notas[1] = 8.5;
notas[2] = 7.8;
notas[3] = 9;
console.log(notas.length)

//C. Adicionar elementos a um array.
notas.push(9.5) //Adiciona no final
notas.unshift(5.45) //Adiciona no inicio

//D. Extrair elementos de um array
notas.pop() //remove no final
notas.shift() //remove no inicio

//E. Comparar elementos de um array com os elementos de outro.

let participanteA = [5,8,8.1];
let participanteB = [6.5,7,7];

if(participanteA[0] > participanteB[0]){
    //Ponto para o participante A na terceira rodada
} else {
    //ponto para o participante B na terceira rodada
}
// quem foi o vencedor

// todos os arrays de entrada vão ter 4 elementos.
   function inverter(array = []){
    const novoArray = ["fulano4"];
    novoArray[0] = array[3];
    novoArray[1] = array[2];
    novoArray[2] = array[1];
    novoArray[3] = array[0];
    console.log(novoArray);
}

const nomes = ["fulano1", "fulano2", "fulano3", "fulano4"];
const elementoRemovido = nomes.pop(); //fulano4
inverter(nomes); //["fulano4", "fulano3", "fulano2", "fulano1"];


// SomarArray()

function Somar(array)