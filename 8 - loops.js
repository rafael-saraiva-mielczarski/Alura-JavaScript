console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhada = false; // booleano, verdadeiro ou falso
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possivéis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;
let contador = 0;

while(contador < 3){ //O WHILE ficara repetindo o código enquanto a condição for verdadeira. 
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //Para a verificação do Vetor quando ele acha o elemento
    }
    contador = contador +1; //Para de percorrer o ARRAY usamos um contador mais 1.
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}


for(let cont = 0; cont < 3; cont ++){ 
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}
//for(let cont = 0;) Inicia a variavel para que ele fique dentro do loop
//for(cont <3;) Condição para que o contador fique fazendo o loop no for
//for(cont ++) Condição para que o contador consiga sair do loop infinito, fazendo ele passar de elemento em elemento