function retornaQuantidadeCaracteres(caractere, texto){
    let qtdChar = 0;

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            qtdChar++;
        }
    }

    return qtdChar;
}

let qtdCaracteres = retornaQuantidadeCaracteres("r", "O rato roeu a roupa do rei de roma");

console.log(qtdCaracteres);