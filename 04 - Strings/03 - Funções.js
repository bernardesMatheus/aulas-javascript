let nome = "Zézinho";
let sobrenome = "da Silva";

// concat - concatena duas strings
let nomeConcatenado =  nome.concat("   ", sobrenome);
let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeConcatenado);
console.log(nomeCompleto);


// length - retorna a quantidade de caracteres numa string
console.log("Charles".length);

// charAt - retorna qual é o caractere no índice especificado
console.log(nome.charAt(0));

// charCodeAt - retornar o código UTF do índice especificado
console.log(sobrenome.charCodeAt(1));
console.log(sobrenome.charCodeAt(0));
console.log("e".charCodeAt(0));
console.log(nome.charCodeAt(1));

console.log("1".charCodeAt(0));

// indexOf - retorna a posição do primeiro elemento que corresponde a string passada no parâmetro
console.log(sobrenome.toUpperCase().indexOf("SILVA"));

// trim - remove os espaços antes e depois da string especificada
let nomeUsuario = "  \nMatheus Bernardes Moreira \n";
console.log(nomeUsuario.trim() + " Próxima String...");

// toUpperCase - transforma todas as letras para maiúsculo
// toLowerCase - transforma todas as letras para minúsculos
console.log(nome.toLowerCase() + sobrenome.toUpperCase());

// substring - retorna uma parte específica da string
console.log(sobrenome.substring(3, 6));

// split - divide a sua string num array de strings (dado um char especificado)

let listaPalavras = nomeCompleto.split(' ');
console.log(listaPalavras);

let linhasExcel = [
    "Matheus Bernardes Moreira;matheus.abmoreira@gmail.com;19;Vitória-ES",
    "Zézinho;zezinho@gmail.com;25;Blumenau-SC"
];

let linhaFormatada = [];
for(let i = 0; i<linhasExcel.length; i++){
    let stringSplitada = linhasExcel[i].split(";");

    linhaFormatada.push(`-> Usuário ${stringSplitada[0]} tem ${stringSplitada[2]} anos`);
}

console.log(linhaFormatada);
console.log(linhaFormatada.join("\n"));
//console.log(linhasExcel.split(";"));

// startsWith - verifica se uma string começa com o texto especificado
console.log(nome.startsWith("Zézinho"));

// endsWith - verifica se uma string termina com o texto especificado
console.log(sobrenome.endsWith("silva"));

// replace - substitui uma string num texto por outra passada pelo parâmetro

let sobrenomeAtualizado = sobrenome.replace("da Silva", "Souza");
console.log(sobrenomeAtualizado);
console.log(sobrenome);