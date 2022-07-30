function calculaImc(peso, altura){
    let imc = peso / (altura/100*altura/100);
    return imc.toFixed(2);
}

console.log(calculaImc(60, 173));