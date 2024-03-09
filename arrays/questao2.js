const prompt = require('prompt-sync')();
function EstacaoAno() {
    const dia = parseInt(prompt("Digite o dia:"));
    const mes = parseInt(prompt("Digite o mês:"));

    if ((mes === 9 && dia >= 21) || (mes === 10) || (mes === 11) || (mes === 12 && dia <= 20)) {
        return "PRIMAVERA";
    } else if ((mes === 12 && dia >= 21) || (mes === 1) || (mes === 2) || (mes === 3 && dia <= 20)) {
        return "VERAO";
    } else if ((mes === 3 && dia >= 21) || (mes === 4) || (mes === 5) || (mes === 6 && dia <= 20)) {
        return "OUTONO";
    } else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia <= 20)) {
        return "INVERNO";
    } else {
        return "Data inválida";
    }
}

console.log(EstacaoAno());