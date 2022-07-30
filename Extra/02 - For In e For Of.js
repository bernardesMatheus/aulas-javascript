let usuarios = ["Zézinho", "Matheus", "Joana", "Nicolas", "Ester"];

// Retorna cada valor contido na lista
for(let usuario of usuarios){
    // console.log(usuario);
}

// Retorna cada índice contido na lista
for(let indiceUsuario in usuarios){
    // console.log(indiceUsuario);
}

let contatos = [
    {nome: "Zézinho", telefone: "4002-8922"},
    {nome: "Maria Joaquina", telefone: "99999-9999"},
    {nome: "Cirilo", telefone: "1234-5679"},
];

for(let contato of contatos){
    for(let prop in contato){
        console.log(`${prop.toUpperCase()}: ${contato[prop]}`);
    }
    console.log("===========");
}