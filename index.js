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
