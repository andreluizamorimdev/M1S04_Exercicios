/* 
    M1S04 - Exercicio 06 - Objetos

    Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log 
    para cada objeto.
*/

const pessoa = {
    nome: "André",
    idade: 24,
    nacionalidade: "Brasileira",
    profissao: "Programador"
}

console.log(`Primeiro objeto pessoa: ${JSON.stringify(pessoa)}`);

const pessoa2 = {
    nome: "Maria",
    idade: 30,
    nacionalidade: "Brasileira",
    profissao: "Marketing"
}

console.log(`Segundo objeto pessoa: ${JSON.stringify(pessoa2)}`);

const pessoa3 = {
    nome: "Pedro",
    idade: 40,
    nacionalidade: "Brasileira",
    profissao: "CEO"
}

console.log(`Terceiro objeto pessoa: ${JSON.stringify(pessoa3)}`);


