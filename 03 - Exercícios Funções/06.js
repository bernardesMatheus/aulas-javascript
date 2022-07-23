function retornaOposto(valor){
    if(typeof valor === "number"){
        return -valor;
    }

    if(typeof valor === "boolean"){
        return !valor;
    }

    return "A função espera um parâmetro do tipo \"bool\" ou \"number\", porém o valor informado é do tipo \"string\".";
}
console.log(retornaOposto(1000));
console.log(retornaOposto(-1000));

console.log(retornaOposto(true));
console.log(retornaOposto(false));

console.log(retornaOposto("Teste"));