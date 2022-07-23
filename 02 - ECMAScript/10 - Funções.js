// Funções são blocos de códigos que são fundamentais no Javascript.
// Uma função nada mais é que um conjunto de rotinas, processos, operações... que executa alguma tarefa ou calcula algum valor

// Como declarar/definir uma função no Javascript?

/* 
    Após utilizar a palavra reservada "function", devemos definir:
    - > Nome da função
    - > Lista de argumentos a serem passados para a função, entre parênteses e separados por vírgulas (opcional)
    - > Rotina de execução da funções entre chaves
*/

// A função pode ter ou não um retorno

// Não recebe parâmetro e não tem retorno
function imprimeSaudacaoUsuario(){
    console.log("Olá, usuário!");
}

// Recebe parâmetro e não tem retorno
function imprimeSaudacaoCustomizada(usuario){
    console.log(`Olá, ${usuario}!`);
}

// Recebe parâmetro e tem retorno
function calculaAreaCircunfencia(raio){
    let area = Math.PI * Math.pow(raio, 2);
    
    return area;
}

// Recebe parâmetros, mas não tem retorno
function imprimeAreaRetangulo(base, altura){
    let area = base*altura;
    console.log(area);
}

imprimeSaudacaoUsuario();
// O Javascript não tem suporte para overload!
imprimeSaudacaoCustomizada("Matheus");

let areaCircunfencia = calculaAreaCircunfencia(5);
console.log(areaCircunfencia);

let areaRetangulo = imprimeAreaRetangulo(3, 5);
console.log(areaRetangulo);