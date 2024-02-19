/* 
    M1S04 - Exercicio 08 - Função par/impar

    Implemente uma função que determine se um número é par ou ímpar.
*/

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par`;
    }
    else {
        return `O número ${numero} é impar`;
    }
}

console.log(parOuImpar(2));