let lista = [1, 2, 3, 4, 5, 7, 8, 9, "10.05", 11, "123.321"];
let somaTotal = retornaSoma(lista);

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

console.log(somaTotal);