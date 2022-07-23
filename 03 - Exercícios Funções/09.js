function verificaPar(valor){
    if(valor % 2 == 0){
        return true;
    }

    return false;
}

console.log(verificaPar(2));
console.log(verificaPar(0));
console.log(verificaPar(-2));

console.log(verificaPar(9));
console.log(verificaPar(1));
console.log(verificaPar(-23));