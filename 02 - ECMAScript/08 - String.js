let flutuante = 2.14;
let inteiro = 5;
let verdadeiro = true;
let naoDefinido;
let nulo = null;

console.log(flutuante + " " + typeof flutuante);
console.log(inteiro + " " + typeof inteiro);
console.log(verdadeiro + " " + typeof verdadeiro);
console.log(naoDefinido + " " + typeof naoDefinido);
console.log(nulo + " " + typeof nulo);

let stringFlutuante = String(flutuante);
let inteiroFlutuante = String(inteiro);
let verdadeiroFlutuante = String(verdadeiro);
let naoDefinidoFlutuante = String(naoDefinido);
let nuloFlutuante = String(nulo);

console.log(stringFlutuante + " " + typeof stringFlutuante);
console.log(inteiroFlutuante + " " + typeof inteiroFlutuante);
console.log(verdadeiroFlutuante + " " + typeof verdadeiroFlutuante);
console.log(naoDefinidoFlutuante + " " + typeof naoDefinidoFlutuante);
console.log(nuloFlutuante + " " + typeof nuloFlutuante);

// Template literals/Template strings ou interpolação

console.log(`
    -> O valor ${inteiro} é do tipo ${typeof inteiro}
`);