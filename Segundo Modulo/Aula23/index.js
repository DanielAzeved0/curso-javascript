console.log('Daniel' && false && 'Azevedo');
//o código com a instrutura "AND" retornará sempre a primeira opção que é false, se não tiver nada false ele retornará a ultima opção 

function falaOi() {
    return "Oi";
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());
//podemos usar essa instrutura de codigo com o operador "AND", para executar ou não uma funçao usando o Avalição de Curto-Circuito

console.log(0 || false || null || 'Daniel Azevedo' || true);
//com o mandado "OR" ele retorna a opçõa que é verdadeira, pq ele precisa de apenas uma opção "true" para rodar 

const corUsuario = null;
const corPadrao = corUsuario || "Verde";

console.log(corPadrao);
//pode-se usar o "OR" para se fazer escolhas logicas de um site, se o usuário não escolher nenhuma cor programa escolhe a cor predeterminada pelo desenvolvedor

