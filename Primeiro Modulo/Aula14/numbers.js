let num1 = 1;
let num2 = 10;
let num3 = 32.67093;

console.log(num1.toString() + num2);
//esse comando faz o numero se tornar umas string temporariamente

num1 = num1.toString();
//com esse comando o number se torna uma string de forma permanente

console.log(num2.toString(2));
//dessa froma conseguimos ver a representação binária do número que está na váriavel

console.log(num3.toFixed(2));
//esse comando pode ser usado para diminiuir as casas decimais de um número longo, além de arredondar pra cima

console.log(Number.isInteger(num2));
//conseguimos ver se um número é inteiro ou não por meio desse comando

let temp = num1 + 'Oi';
console.log(Number.isNaN(temp));
//esse comando nos retorna true pu false (verdadeiro ou falso), qunando tempos um "NaN" (Is not a number);

let num4 = 0.7;
let num5 = 0.1;
//se fizer a soma comum desses dois números não dará 0.8

num4 += num5;

num4 = Number(num4.toFixed(2));
//esse coamdo faz com que o calculo seja corrigido e chegue aonde queremos, que é o 0.8

console.log(num4);