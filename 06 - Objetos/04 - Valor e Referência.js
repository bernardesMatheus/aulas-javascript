// Valor
let a = 1;
let b = a;
a = a + 2;

console.log(a);
console.log(b);

// Referência
let lista1 = [1];
let lista2 = lista1;
lista1.push(3);

console.log(lista1);
console.log(lista2);

// Comparando tipos primitivos/valor
let valor1 = 1;
let valor2 = valor1;
console.log(valor1 == valor2);
console.log(valor1 == 1);
console.log(valor2 === valor1);

// Comparanto tipos de referência
let ref1 = [1];
let ref2 = [1];

console.log(ref1 === ref2);
console.log(ref1 == ref2);
console.log(ref1 == [1]);

let ref3 = ref1;
console.log(ref3 == ref1);
console.log(ref3 === ref1);

let testeValor = 1;
let testeReferencia = {valor: 1};

function adiciona(ref){
    ref.valor+=1;

    console.log(ref.valor);
}

// adiciona(testeValor);
// console.log(testeValor);

adiciona(testeReferencia);
console.log(testeReferencia);