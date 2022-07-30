// Permite a criação de funções sem a utilização do 'function', 'return' e '{}';

// Declaração de função convencional;
function retornaSoma(n1, n2){
    return n1+n2;
}

let retornoDaSoma = retornaSoma(1,2);

// Declaração utilizando arrow function;
let soma = (n1, n2) => n1 + n2;

console.log(soma(1, 2));

let calculadora = (n1, n2) => {
    console.log(n1 + n2);
    console.log(n1 - n2);
    console.log(n1 * n2);
    console.log(n1 / n2);
}

let saudacaoUsuario = (nome) => `Olá, ${nome}!`;
const retornaAnoAtual = () => new Date().getFullYear();

let exibeMensagem = (callbackSaudacao, callbackAno) => {
    console.log(`${callbackSaudacao("Matheus")} ${callbackAno()}`);
}

exibeMensagem(saudacaoUsuario, retornaAnoAtual);