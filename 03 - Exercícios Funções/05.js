function verificaMaiorOuIgual(valor1, valor2){
    if(valor1 >= valor2){
        return true;
    }

    return false;
}

console.log(verificaMaiorOuIgual(1, 0)); // true
console.log(verificaMaiorOuIgual(0, 1)); // false
console.log(verificaMaiorOuIgual(0, 0)); // true