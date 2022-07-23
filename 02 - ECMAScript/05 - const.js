// Const


const cpf = "123.456.789-00";
console.log(cpf);

if(true){
    const cpf = "123.456.789-00"; // Podemos atribuir em escopos diferentes;
    cpf = "199.123.234-20"; // Erro de asignment;
}

const cpf = "123.456.789-00"; // Não podemos atribuir num mesmo escopo;