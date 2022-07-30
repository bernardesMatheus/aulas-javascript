let palavraFoiEncontrada1 = retornaPalavraEncontrada('r', ['rato', 'roeu', 'roupa', 'rei', 'roma']);

let lista = ['rato', 'roeu', 'roupa', 'rei', 'roma'];
let palavraFoiEncontrada2 = retornaPalavraEncontrada('rom', lista);

console.log(palavraFoiEncontrada1);
console.log(palavraFoiEncontrada2);

function retornaPalavraEncontrada(palavra, listaDePalavras){
    for(let i = 0; i < listaDePalavras.length; i++){
        if(listaDePalavras[i] === palavra){
            return true;
        }
    }
    
    return false;
}