const prompt = require('prompt-sync')();
function traduzir(mensagem) {
    const alfabeto = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let numeros = mensagem.split(" ");
    let traducao = "";

    for (let num of numeros) {
        traducao += alfabeto[parseInt(num)];
    }

    return traducao;
}

let mensagem = "";
while (mensagem !== "fim") {
    mensagem = prompt("Digite uma mensagem ou 'fim' para encerrar:");
    if (mensagem !== "fim") {
        console.log(traduzir(mensagem));
    }
}

// 2 15 1 0 20 1 18 4 5
// 2 15 1 0 19 5 13 1 14 1
// 6 9 13