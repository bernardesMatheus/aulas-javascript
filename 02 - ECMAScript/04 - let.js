// Let

// 01 - Não pode ser utilizada fora do escopo de declaração;
if(true){
    let mensagem = "Olá aluno!";
    console.log(mensagem);

    // 02 - Não permite redeclarar uma mesma variável no mesmo escopo/bloco;
    // let mensagem = "A sala está cheia"; // Erro!

    // 03 - Pode ser atualizada no mesmo escopo
    mensagem = "A sala está cheia...";
};

//console.log(mensagem); // Erro!

let mensagem = "A sala está cheia...";
console.log(mensagem);