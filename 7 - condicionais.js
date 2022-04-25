console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhada = true; // booleano, verdadeiro ou falso
const temPassagemComprada = true;
console.log("Destinos possivéis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador é maior de idade!");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) { // else if tira chaves desnecessarias, deixando o código mais enxuto.
    console.log("Comprador esta acompanhado!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador é menor de idade, proibido de comprar!");
}

console.log(listaDeDestinos);

// ########################################################################################################
// OPERADORES E = && e OU = ||

// if (idadeComprador >= 18 || estaAcompanhada == true) { // OU = || e E = &&
//     console.log("Comprador é maior de idade!");
// } else {
//     console.log("Comprador é menor de idade, proibido de comprar!");
// }

// console.log("Embarque: \n");
// if (idadeComprador >= 18 && temPassagemComprada) {
//     console.log(listaDeDestinos[1]);
//     console.log("Boa viagem!");

// } else {
//     console.log("Você não pode embarcar");
// }

// console.log(listaDeDestinos);






// const idadeComprador = 17; idade recebe 17
// console.log(idadeComprador > 18); Maior que 18
// console.log(idadeComprador < 18); Menor que 18
// console.log(idadeComprador >= 18); Maior ou igual a 18
// console.log(idadeComprador <= 18); Menor ou igual a 18
// console.log(idadeComprador == 18); Igual

//SHIFT + ALT + F = FORMATAR CÓDIGO