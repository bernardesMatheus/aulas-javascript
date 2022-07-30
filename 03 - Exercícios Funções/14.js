function retornaSoma(lista){
    let soma = 0;

    for(let i=0; i < lista.length; i++){
        if(typeof lista[i] != "number" && typeof lista[i] != "string"){
            return "Informe um tipo numérico."
        }

        let numeroAtual = parseFloat(lista[i]);
        soma += numeroAtual;
    }

    return parseFloat(soma.toFixed(2));
}

function calculaMedia(lista){
    let soma = retornaSoma(lista);
    let media = soma/lista.length;
    
    return media;
}

let valores =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let mediaLista = calculaMedia(valores);

console.log(mediaLista);