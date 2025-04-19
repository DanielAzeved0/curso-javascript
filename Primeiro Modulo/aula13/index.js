let umaString =  (`O rato roeu a roupa do rei de roma`);

console.log(umaString[3]);
//podemos saber a letra com o muero 

console.log(umaString.indexOf("rato")); 
//conseguimos saber em que numero se começa a palavra selecionada
console.log(umaString.length);
//nesse comando conseguimos saber o tamanho da string

console.log(umaString.replace('rato', 'RATO'));
//esse comando serve para trocar uma mensagem da string

console.log(umaString.replace(/r/g, '*')); 
//o /r/ marca a letra selecionada para ser trocada, e em seguida o caracter que irá a substituir 

console.log(umaString.slice (2, 6));
//aqui eu seleciona algumas letras especificas para serem lidas, no caso seria da letra número até a letra número 6

console.log(umaString.split(' '));
//aqui podemos formar uma array isolando o caracter escolhido dentro das aspas simples

console.log(umaString.split(' ', 4));
//e com esse número atrás você determina até aonde vai esse array 
 
console.log(umaString.toUpperCase());
//esse comando deixa todas as letras da string maiscula

console.log(umaString.toLowerCase());
//e nesse deixa tudo minusculo