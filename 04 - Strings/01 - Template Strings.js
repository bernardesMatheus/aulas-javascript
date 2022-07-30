// Template strings ou Template literals...

let idade = 18;
let nome = "Zézinho";
let date = new Date();

let lista = [
    [1, 2, 3]
];

//console.log(typeof lista);
console.log(typeof lista);

console.log(nome + " tem " + idade + " anos.");
console.log(`
    => No ano de ${date.getFullYear()+1} ${nome} terá ${idade+1} anos.
`);