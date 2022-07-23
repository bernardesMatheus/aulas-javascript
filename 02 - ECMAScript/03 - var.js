// Var

var testeGlobal = "Testando...";

if(true){
    var contador = 15;
    // console.log(testeGlobal);
    // console.log(contador);
}

testeEscopado = "Variável escopada";

var contador = "3...2...1...";
// console.log(contador);

// Caso onde um bug pode ser gerado...

var mensagem = "Olá usuário ";

var qtdAlunos = 9;
if(qtdAlunos > 8){
    var mensagem = "A sala está completamente cheia!";
}

var usuario = "João";
console.log(mensagem + usuario);