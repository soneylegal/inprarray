const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function imprimirInverso(n, palavra) {
    let palavraInvertida = "";
    for (let i = n - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    console.log(palavraInvertida);
}

function main() {
    rl.question('Digite um inteiro n (ou 0 para sair): ', (n) => {
        if (n === '0') {
            rl.close();
            return;
        }

        const numero = parseInt(n);

        rl.question('Digite uma sequência de caracteres: ', (palavra) => {
            imprimirInverso(numero, palavra);
            main();
        });
    });
}

main();