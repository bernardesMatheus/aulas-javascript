function converteSalario(salarioAnualDolar, cotacao){
    let salarioAnualReal = salarioAnualDolar * cotacao;
    let salarioMensalReal = salarioAnualReal/12;

    return parseFloat(salarioMensalReal.toFixed(2));
}

let salario = converteSalario(40000, 5.5);
console.log(salario);