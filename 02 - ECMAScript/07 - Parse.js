// Parse

let numero = "12345.67891235";
console.log("O numero é " + numero + " e o tipo é: " + typeof numero);

let inteiroConvertido = parseInt(numero);
console.log("O numero é " + inteiroConvertido + " e o tipo é: " + typeof inteiroConvertido);

let floatConvertido = parseFloat(numero);
console.log("O numero é " + floatConvertido + " e o tipo é: " + typeof floatConvertido);

// O Javascript não diferencia os tipos int (inteiro) e float (flutuante);

let floatFixado = parseFloat(floatConvertido.toFixed(2));
console.log(floatFixado);

let valorb = 125;
console.log(floatFixado + valorb);

// Parse p/ outras bases numéricas

let hexadecimal = parseInt("F", 16);
console.log(hexadecimal);

let binario = parseInt(1001, 2);
console.log(binario);