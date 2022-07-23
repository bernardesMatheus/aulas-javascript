function retornaParesEntreValores(valor1, valor2){
    let listaPares = [];

    for(let i=valor1+1; i < valor2; i++){
        if(i % 2 == 0){
            listaPares.push(i);
        }
    }

    return listaPares;
}

console.log(retornaParesEntreValores(0, 10));