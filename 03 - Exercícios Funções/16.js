function retornaQuantidadeDePalavras(_string){
    let qtdPalavras = 0;

    if(_string.length == 0){
        return 0;
    }
    
    for(let i=0; i<_string.length; i++){
        if(_string[i] === " "){
            qtdPalavras++;
        }
    }

    return qtdPalavras + 1;
}

let texto = "  ";
let qtdPalavras = retornaQuantidadeDePalavras(texto);
console.log(qtdPalavras);
