class Animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`. . . ${this.nome} emitiu um barulho . . .`);
    }
}

let animal = new Animal("Pikachu");
animal.falar();

class Gato extends Animal{
    falar(){
        super.falar();
        console.log(". . . Miou . . .");
    }

    miar(){
        console.log(". . . Miou . . .");
    }

    bebeLeite(){
        console.log("Bebeu leite. . .")
    }
}

let gato = new Gato("Nina");
gato.falar();