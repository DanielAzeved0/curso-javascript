/*
+ Adição 
- Subtração
/ Divisão 
* Multiplicação
** Potenciação
% Resto da divisão  
*/
let contador = 10;
let contador1 = 10;
// esses dois sinais de mais fazem a dição de mais um 
++contador;
++contador;
++contador;
++contador;
console.log(contador);

//esse faz a mesma coisa que ação do de cima, só que ao invés de acrescenter ele subtrai
--contador1;
--contador1;
--contador1;
--contador1;
console.log(contador1);

const passo = 2;
let contador2 = 1;
//esse passo determina de quantso em quantos numeros o contador vai pular, ao invés de ser de 1 em 1, nesse caso acresenta de 3 em 3
contador2 = contador2 + passo;
contador2 += passo;
//essas são as duar formas de fazer atribuição 
console.log(contador2);
//isso pode ser feito com qualuer operdaor aritméticos

//essas são as formas de converter uma string em um número
const num1 = 10;
const num2 = parseInt('5');
//esse comando "parseInt" transforma o numero da string em um numero interio
const num3 = parseFloat('5.2');
// já o "parseFloat" transforma a string em u número mas leva os seus decimais juntos
const num4 = Number('2.3');
//e o comando "Number" ele se vira e identifica se a string é um número decimal, inteiro ou se não pode ser executado
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);