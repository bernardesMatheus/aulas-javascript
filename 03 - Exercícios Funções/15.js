function imprimeAreaRetangulo(base, altura){
    console.log(base*altura);
}

imprimeAreaRetangulo(5, 4);
imprimeAreaCircunferencia(5);

function imprimeAreaCircunferencia(raio){
    let area = Math.PI*(Math.pow(raio, 2));
    
    console.log(area);
}