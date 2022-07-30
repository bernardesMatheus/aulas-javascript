let usuarios = ["Matheus", "Zézinho", "Maria", "Xpto"];

console.log(usuarios);

let contatos = new Array();

contatos = usuarios;

console.log("Não atualizado: " + contatos);
usuarios.push("Joãozinho");

console.log("Atualizado: " + contatos);