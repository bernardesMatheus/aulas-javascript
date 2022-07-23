// console.log(Math.pow(5, 2));

function calculaPotencia(base, expoente){
    if(expoente == 0){
        return 1;
    }

    if(expoente == 1){
        return base;
    }

    let potencia = 1;
    for(i = 0; i < expoente; i++){
        potencia = potencia * base;
    }

    return potencia;
}

console.log(calculaPotencia(5, 8));
console.log(calculaPotencia(2, 0));
console.log(calculaPotencia(5, 0));