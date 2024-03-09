const prompt = require('prompt-sync')();
function SomaDigitos(numero) {
    let soma = 0;
    let numString = numero.toString();

    for (let i = 0; i < numString.length; i++) {
        soma += parseInt(numString[i]);
    }

    return soma;
}

const numero = Number(prompt("Número: "));
const resultado = SomaDigitos(numero);
console.log(resultado);