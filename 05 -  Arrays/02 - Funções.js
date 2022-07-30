let listaContatos = ["Ângela", "Angela", "Matheus", "Zézinho", "Maria", "Xpto", "Zézinho"];

// push - adiciona um elemento ao final da lista
listaContatos.push("Joãozinho");
console.log(listaContatos);
// pop - remove o último elemento da lista
listaContatos.pop();
console.log(listaContatos);

// unshift - adiciona um elemento no começo da lista
listaContatos.unshift("Joana");
console.log(listaContatos);

// shift - remove o primeiro elemento da lista
listaContatos.shift();
console.log(listaContatos);

// splice - adiciona/remove elementos do array -> Parâmetros: (índice, quantidade de elementos a remover a partir do índice, elemento a ser adicionado);
//listaContatos.splice(1, 2);
console.log(listaContatos);

// indexOf - retorna o índice do primeiro elemento que corresponde ao parâmetro passado;
console.log(listaContatos.indexOf("Zézinho"));

// lastIndexOf - retorna o índice do último elemento que corresponde ao parâmetro passado;
console.log(listaContatos.lastIndexOf("Zézinho"));

// slice - retorna um novo array contendo os mesmos elementos do array anterior;
let listaUsuarios = listaContatos.slice();
listaContatos.push("XYZ");
console.log(listaUsuarios);

// join - retorna uma string com os elementos do array separados por um caractere;
console.log(listaContatos.join('\n'));

// reverse - inverte a ordem dos elementos do array;
console.log(listaContatos.reverse());

// sort - ordena o array através de caracteres alfanuméricos;
console.log(listaContatos.sort());

// filter - retornar um novo array com os elementos do array original filtrados por uma função passada por parâmetro;

// Função anônima
let listaFiltrada1 = listaContatos.filter((nomeQualquer) => nomeQualquer.startsWith("X"));

console.log(listaFiltrada1);

function filtraNome(nomeContato) {
    return nomeContato.startsWith("M");
}

// Referência para função de callback
let listaFiltrada2 = listaContatos.filter(filtraNome);
console.log(listaFiltrada2);

// foreach - executar uma função específica para cada elemento do array;
listaContatos.forEach(function (nome) {
    console.log(nome.toUpperCase());
})

// map - retorna um novo array com os elementos do array original alterados;
let listaContatosModificada = listaContatos.map(function (contato) {
    return `-> ${contato.toLowerCase()}`;
})
console.log(listaContatosModificada);

// find - retornar um elemento do array que corresponda a condição passada por parâmetro;
let contatoEncontrado = listaContatos.find(function (n) {
    return n.startsWith("Zézinho");
})

if (!contatoEncontrado) {
    console.log("Não encontrado!");
} else {
    console.log(contatoEncontrado);
}
