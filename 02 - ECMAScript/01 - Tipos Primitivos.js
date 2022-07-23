//Undefined
var valorInicial;
//console.log(typeof valorInicial);
var lista = [1, 2, 3];
//console.log(lista[5]);

//Null
valorInicial = null;
console.log(typeof null);

if(valorInicial == null){
    //console.log("Valor precisa ser inicializado...");
}

//Boolean
var ehPar = false;
ehPar = (0 % 2 == 0);
console.log(typeof ehPar);

//Number
var idade = 30;
var altura = 1.75;
console.log(typeof idade);
console.log(typeof altura);

//String

var nome = "João";
var cursosApex = "FrontEnd, Java, .NET, Python";
console.log(typeof cursosApex);

// Outros tipos
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof [1, 2, 3]);