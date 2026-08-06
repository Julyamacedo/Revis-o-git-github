//nome:Julya macedo
//nome:katherine de Paula
//nome:Isabela Rossi

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
