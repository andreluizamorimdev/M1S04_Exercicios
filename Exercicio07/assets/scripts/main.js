/* 
    M1S04 - Exercicio 07 - Função cumprimentos

    Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, 
    de acordo com a hora passada.
*/

function saudacao(hora) {
    /* const data = new Date();
    const horaAtual = data.getHours();

    if (horaAtual >= 0 && horaAtual < 12) {
        console.log("Bom dia");
    } else if (horaAtual >= 12 && horaAtual < 18) {
        console.log("Boa tarde");
    } else if (horaAtual >= 18 && horaAtual <= 23) {
        console.log("Boa noite");
    } else {
        console.log("Hora inválida");
    } */
    if (hora >= 0 && hora < 12) {
        console.log("Bom dia");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde");
    } else if (hora >= 18 && hora <= 23) {
        console.log("Boa noite");
    } else {
        console.log("Hora inválida");
    }
}

saudacao(16);