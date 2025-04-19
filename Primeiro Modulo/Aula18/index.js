const pessoa01 = {
    nome: `Daniel`,
    sobrenome: `Azevedo`,
    idade: 19
};

console.log(pessoa01);
//essa é uma forma de se fazer um objeto

function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade 
    };
}

const pessoa02 = criaPessoa(`Gabriel`, `Azevedo`, 20);
const pessoa03 = criaPessoa(`Camila`, `Azevedo`, 23);
console.log(pessoa02.nome);
//pode se puxar apenas um dado do objeto
console.log(pessoa02, pessoa03);

//essa é outra forma de se fazer um objeto, nessa podemos usar uma função par nos ajudar, chamam ela de factory 