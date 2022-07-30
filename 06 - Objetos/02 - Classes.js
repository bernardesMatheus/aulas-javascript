// Classes foram adicionadas a partir do ES6;

class Contato{
    constructor(id, nome, telefone, idade){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.idade = idade;
        this.maiorDeIdade = false;

        if(this.idade >= 18){
            this.maiorDeIdade = true;
        }
    }

    getNome(){
        return `NOME: ${this.nome}`;
    }

    toString(){
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nTelefone: ${this.telefone}\nMaior de Idade: ${this.maiorDeIdade}`;
    }

    static RetornaSaudacao(){
        return "Olá, contato!";
    }
}

let contato1 = new Contato(1003 ,"Matheus", "27 999635593", 19);
console.log(contato1);
//console.log(`Nome: ${contato1.nome}\nTelefone: ${contato1.telefone}\nIdade: ${contato1.idade}`);

let contato2 = new Contato(2503 ,"Matheus", "27 999635593", 17);
console.log(contato2);
console.log(contato2.toString());

console.log(Contato.RetornaSaudacao());