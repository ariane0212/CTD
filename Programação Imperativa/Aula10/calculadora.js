// Calculadora - Nível I


function soma(num1 = 0, num2 = 0){
    return num1 + num2;
}

function subtracao(num1 = 0, num2 = 0){
    return num1 - num2;
}

function multiplicacao(num1 = 1, num2 = 1){
    return num1 * num2;
}

function divisao(num1 = 1, num2 = 1){
    return num1 / num2;
}

// Calculadora - Nível II

console.log("____________ Teste de Operações / Calculadora________");
console.log('Função soma: ' , soma(6,5));
console.log('Função subtração:' , subtração(10,8));

console.log('Função multiplicação: ' , multiplicacao(5.5,90));
console.log('Função divisao:' , divisao(7.56,1.97));
console.log('Função divisao por 0:' , divisao(100,0));

// Calculadora - Nível III

function quadradoDoNumero(numero){
    return multiplicaor(numero,numero);
}
console.log('Função quadrado: ' , quadradoDoNumero(5));

function mediaTresNumeros(num1,num2,num3){
    const somaNum1Num2 = soma(num1,num2);
    const soma = soma(somaNum1Num2,num3);
    return divisao(soma,3);
}


console.log('Função media de três: ' , mediaDeTresNumeors(5,7.5,8));

function calculaPorcentagem(valorTotal,valorPercentual){
    return(valorTotal*valorPercentual)/100;
}