console.log(`Trabalhando com listas`);
// const salvador = "Salvador";
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//new Array() = vetores e se declara os itens dentro dos parenteses.
const listaDeDestinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro"
);

listaDeDestinos.push("Porto Alegre") //usa o PUSH para adicionar itens nas listas depois de criar ela

console.log("Destinos possivéis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // SPLICE deleta elementos, seleciona uma posição que tu quer e quantos itens depois dessa posicão serão deletados. Nesse caso deleta o item na posicão 1 e somente ele.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // [n] só mostra um elemento selecionado da lista
