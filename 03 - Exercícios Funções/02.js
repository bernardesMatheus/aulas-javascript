// Math.floor

function converteIdadeParaDias(idade){
    let qtdAnosBissextos = Math.floor(idade/4);

    return idade * 365 + qtdAnosBissextos;
}

console.log(converteIdadeParaDias(20));