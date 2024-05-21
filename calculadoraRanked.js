let vitorias 
let derrotas 
let nivel
let saldo;

function CalculadoraRankeada(vitorias,derrotas,saldo){
    
    vitorias = 50
    derrotas = 5

    saldo = vitorias - derrotas;
    
    if(saldo < 10){
        nivel = "Ferro"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 10 && saldo < 21){
        nivel = "Bronze"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 20 && saldo < 51){
        nivel = "Prata"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 50 && saldo < 81){
        nivel = "Ouro"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 80 && saldo < 91){
        nivel = "Diamante"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 90 && saldo < 101){
        nivel = "Lendário"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    if(saldo > 100){
        nivel = "Imortal"
        console.log("O Herói tem de saldo de " + saldo +  ", e está no nível de " + nivel + "!");
    }
    
    
}

CalculadoraRankeada(vitorias,derrotas,saldo);
