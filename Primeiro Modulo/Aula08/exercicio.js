const nome = 'Daniel';
const sobrenome = 'Azevedo';
const idade = 43;
const peso = 60;
const altura = 1.75;
let indiceMassaCorporal;
let dataNascimento;
indiceMassaCorporal = peso / (altura * altura);
dataNascimento = 2025 - idade;

// o imc é de 9.591836734693878 e a sua data de nascimento foi em 1982*

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kilos, tem', altura, 'de altura e seu IMC é de', indiceMassaCorporal, nome, sobrenome, 'nasceu em', dataNascimento);

console.log(nome + ''/*essas duas aspas simples são um espaço*/ + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kilos, tem ' + altura + ' de altura e o seu IMC é de ' + indiceMassaCorporal + ' ' + nome + ' ' + sobrenome + ' nasceu em ' + dataNascimento)
// nessa frase de baixo eu uni todas as variaveis em uma só assim se tornando apenas uma string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos, tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal} ${nome} ${sobrenome} nasceu em ${dataNascimento}`);
// essa e outra forma de concatenar uma frase e tornando ela uma string só