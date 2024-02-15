/* M1S04 - Exercicio 05 - Estruturas Condicionais
    Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log(). 
*/

let numero = Number(prompt("Digite um número"));

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}