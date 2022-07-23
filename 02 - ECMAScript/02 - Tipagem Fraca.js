var verificaTipagemFraca = "18" == 18;
console.log(verificaTipagemFraca);

var verificaTipagemForte = "18" === 18;
console.log(verificaTipagemForte);

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);

var inputEmail = "";
if(!inputEmail){
    console.log("Preencha o input email...");
}

var naoInicializado = null; 

if(!naoInicializado){
    console.log("Valor não atribuído...");
}