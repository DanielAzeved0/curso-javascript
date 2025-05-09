/*Operadores de comparação 
> maior que 
>= maior que ou igual a 
< menor que
<= menor que ou igual a
== igualdade
=== igualdade estrista
!= diferente
!== diferente estrito
*/

const maior = 10 > 5;
console.log(maior);
//se o número for maior que o outro irá retornar "true", no exemplo vemos que 10 é maior que 5

const maiorOuIgual = 10 >= 5;
console.log(maiorOuIgual);
//esse comando vai retornar "true" ou se o numero for igual ou maior q o outro, no caso do esxmplo é se o "10" for igual ou maior que o "5"

const menor = 10 < 11;
console.log(menor);
//nesse comando vemos que se o número for menor que outro irá retornar true, se 10 for menor que 11 ira retonar "true"

const menorOuIgual = 10 <= 11;
console.log(menorOuIgual);
//aqui temos um comando igual o maior ou igual que, apenas devemos mudar p maior pelo maior, se o número for menor ou igual ao outro, o comando irá retornar true

const igualEstrita = 10 === 10;
console.log(igualEstrita);
//nesse comando nós verificamos se o número é igual ao o outro e se o tipos deles também são iguias

const diferenteEstrito = 10 !== 11;
console.log(diferenteEstrito);
//aqui nesse comando vemos se os dois números são diferentes ou não, além de checar os tipo deles


