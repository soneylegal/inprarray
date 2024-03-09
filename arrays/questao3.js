const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira o tamanho do array: ', (size) => {
    rl.question('Insira os elementos do array separados por espaço: ', (elements) => {
        const array = elements.split(' ').map(Number);

        let menorValor = array[0];
        let posicao = 0;

        for (let i = 1; i < size; i++) {
            if (array[i] < menorValor) {
                menorValor = array[i];
                posicao = i;
            }
        }

        console.log(`Menor valor: ${menorValor}`);
        console.log(`Posição: ${posicao}`);

        rl.close();
    });
});
//10
// 1 2 3 4 -5 6 7 8 9 10