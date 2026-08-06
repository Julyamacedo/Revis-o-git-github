//nome:Julya macedo
//nome:katherine de Paula
//nome:Isabela Rossi
//PRODUTO
let produtos = ['shampoo', 'condicionador', 'mascara', 'finalização'];
console.log('Lista de produtos inicial');
console.log('=========================');
console.table(produtos);

console.log('Exibe quantidade de produtos');
console.log('=========================');
console.log(`A quantidade de produtos é de ${produtos.length}`);

console.log('Transforme todos os elementos do array');
const maiúsculas = produtos.map(item => item.toUpperCase());
console.log('=========================');
console.log(maiúsculas);

console.log('Transforme todos os percorrer todos os elementos do array utilizando uma estrutura de repetição do array');
for (let i = 0; i< produtos.length; i++) {
    console.log(produtos[i]);
}

console.log('Criando uma estrutura condicional');
if (produtos.length > 5) {
    console.log('O array possui quantidade suficiente de registros');
} else {
console.log('O array possui quantidade insuficiente de registros');

}

//PRODUTOS DE CABELOS - DESENVOLVIMENTO 1
let produtos = ['shampoo', 'condicionador', 'mascara', 'finalização'];
console.log('* LISTA DE PRODUTO INICIAL');
console.log('===========================');
console.table(produtos);

console.log('* REMOVER PRODUTO INICIAL');
console.log('===========================');
produtos.shift();
console.table(produtos);

console.log('* ADICIONAR NOVO PRODUTO INICIAL');
console.log('===========================');
produtos.unshift('shampoo a seco');
console.table(produtos);

console.log('* PROCURAR PRODUTO');
console.log('===========================');
console.log(produtos.find((produto) => produto === 'condicionador'));
console.log('----------------------------')

console.log('* LISTA ORGANIZADA EM ORDEM ALFABETICA');
console.log('===========================');
produtos.sort();
console.table(produtos);
