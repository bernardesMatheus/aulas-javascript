function retornaMaiorValorDaLista(lista){
    let maiorValor = lista[0];

    for(let i=0; i<lista.length; i++){
        if(lista[i] > maiorValor){
            maiorValor = lista[i];
        }
    }

    return maiorValor;
}

lista = [-10, -13, -55, -1, -24, -132, -5000];

let maiorValor = retornaMaiorValorDaLista(lista);
console.log(maiorValor);