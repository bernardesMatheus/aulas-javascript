console.log(retornaDiaSemanaPorExtenso(10));

function retornaDiaSemanaPorExtenso(dia){
    if(dia == 1){
        return "Domingo";
    }
    
    if(dia == 2){
        return "Segunda-Feira";
    }

    if(dia == 3){
        return "Terça-Feira";
    }

    if(dia == 4){
        return "Quarta-Feira";
    }

    if(dia == 5){
        return "Quinta-Feira";
    }

    if(dia == 6){
        return "Sexta-Feira";
    }

    if(dia == 7){
        return "Sábado";
    }

    return "Dia da semana não encontrado";
}