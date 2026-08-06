let comidas = ['hamburguer', 'batata frita', 'coxinha', 'pizza', 'refrigerante'];
let removido = comidas.pop();
console.log(comidas); //exibir ["hamburguer", "batata frita", "coxinha", "pizza"]
console.log(removido); //exibir "refrigerante"

//adicionar elemento
let comidas2 = ["hamburguer", "batata frita", "coxinha", "pizza"]
comidas2.push("refrigerante")
console.log(comidas2);


const registros = [
    { comidas: 'hamburguer', preco: 20.0, Ativos: true },
    { comidas: 'batata frita', preco: 9.0, Ativos: false },
    { comidas: 'coxinha', preco: 8.0, Ativos: true },
];


const Apenasativos = registros.filter((registro) => registro.Ativos === true);
console.log(Apenasativos);


//registros utilizando
const Registros = []
let preco = 0;
{ comidas: "hamburguer", preco; 20.00; Ativo: true };
{ comidas: "batata frita", preco; 12.00; Ativo: true; };
{ comidas: "coxinha", preco; 8.00; Ativo: false};
const ApenasAtivos = registros.filter((registro) => registro.Ativos === true);




console.log(Apenasativos);


//Inverter ordem
const comidas3 = ["hamburguer", "batata frita", "coxinha"];
comidas3.reverse(0);


console.table(comidas3); // Saída: ["coxinha", "batata frita", "hamburguer"]


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
