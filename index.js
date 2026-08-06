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
