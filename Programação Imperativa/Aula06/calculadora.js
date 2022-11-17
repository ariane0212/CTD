var valor
var valor1
var oper
var readlineSync = require('readline-sync');
oper = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function doOperation(operator, value1, value2) {
    if (operator == "+") {
        return value1 + value2;
    } else if
        (operator == "-") {
        return value1 - value2;
    } else if
        (operator == "*") {
        return value1 * value2;
    } else if
        (operator == "/") {
        return value1 / value2;
    } else {
        throw new Error('Operação inválida');
    }
}


console.log('O resultado é', doOperation(oper, valor, valor1)) 

