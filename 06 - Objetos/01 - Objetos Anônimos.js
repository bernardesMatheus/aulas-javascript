let contato = {id: 41293, nome: "Matheus", telefone: "27999635593", estaOcupado: true};
console.log(contato);

let usuario = {};
console.log(usuario);
usuario.email = "matheus@gmail.com";
usuario.telefone = "4002-8922";
console.log(usuario);

// Inicializando através de uma função construtora;
function Contato(nome, celular){
    this.nome = nome;
    this.celular = celular;
}

let contatoInstanciado = new Contato("Matheus", "99999-7908");
contatoInstanciado.idade = 15;

let outroContato = new Contato("Matheus", "99999-7908", 25);
console.log(outroContato);