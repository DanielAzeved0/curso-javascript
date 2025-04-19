const alunos = [`Luis`, `Maria`, `João`];
console.log(alunos[0]);
//para se saber uma palavra de um array podemos fazer igual fazemos com strings normais, só que ao invés de devolver uma letra ele nos retorna a palavra do numero selecionado
alunos[0] = 'Eduardo';
//dessa forma podemos editar um elemento do array
alunos[3] = 'Luiza';
console.log(alunos);
//e se não tiver nenhum elemento no numero selecionado ele e adcionado no array
console.log(alunos.length);
//dessa forma nós sabemos o tamanho do array, o número mostrado não vai contar o 0, então sera contado apartir do 1
alunos[alunos.length] = 'Fernando';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';
//assim conseguimos ver todos os elementos do array, mas também adicionamos mais alguns 
alunos.push(`Otavio`);
console.log(alunos);
//com esse comando nós também adicionamos mais um elemento no array
alunos.unshift(`Roberto`);
console.log(alunos);
//esse comando adiciona uma elemento no array, mas esse move esse item novo para o começo
const removido = alunos.pop();
console.log(removido);
console.log(alunos);
//com a "const removido" nós conseguimos saber qual foi o elemento removido
//e o comando "pop" ele remove o elemento selecionado 
const remove = alunos.shift();
console.log(remove);
console.log(alunos);
//esse comando é o mesmo que o de cima, só que remove do começo;
console.log(alunos.slice(0, 3));
//aqui cortamos os array, igual fazemos com as strings
console.log(alunos.slice(0, -2));
//podemos fazer dessa forma também, dessa forma nós eleminamos os dois ultimos elementos e resto será exibido
console.log(alunos instanceof Array);
//esse comando revela se avariavel é ou não um array 




