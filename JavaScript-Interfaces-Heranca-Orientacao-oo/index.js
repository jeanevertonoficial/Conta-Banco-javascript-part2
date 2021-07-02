import { Cliente } from "./Conta/Cliente.js"; // importando classes
//import { Conta } from "./Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario";

const cliente1 = new Cliente("Jean", 12345678910);
//const cliente2 = new Cliente("Alice", 112345848); // nome , cpf
//const cliente3 = new Cliente("Roberta", 23232323);

const conta1 = new ContaCorrente(1001, cliente1); // agencia , id cliente
//const conta2 = new ContaCorrente(1002, cliente2); // agencia , id cliente
//const conta3 = new ContaCorrente(1003, cliente3); // agencia , id cliente


conta1.depositar(500);
//conta2.depositar(1000);
//conta3.depositar(1000);



//console.log(`\nnome do cliente: ${cliente1.nome} \nCpf:${cliente1.cpf}\n `);
//console.log(`nome do cliente: ${cliente2.nome} \nCpf:${cliente2.cpf}\n `);
//console.log(`nome do cliente: ${cliente3.nome} \nCpf:${cliente3.cpf}\n `);
//console.log(`Contas: ${ContaCorrente.numeroDeContas}`); // metodo contador

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(500);
contaSalario.sacar(15);

console.log(contaSalario);

//const conta = new Conta(cliente1); // se chamar Conta direto vai aparece uma mensagem de erro pos conta não pode ser puxada direto de uma classe abstrata

//console.log(conta);

//conta1.sacar(100);
//contaPoupanca.sacar(10);


//console.log(conta1);

// const cliente3 = new Cliente();
// cliente3.nome = "Everton";
// cliente3.cpf = 12345678913;
// cliente3.cidade = "São paulo";
// cliente3.rg = 12345652451;
// cliente3.agencia = 124;

// const contaCorrenteJean = new ContaCorrente(1001, cliente2); // agencia , id cliente
// contaCorrenteJean.depositar(1000);

// console.log(cliente2);

//const valorSacado = contaCorrenteJean.sacar(800);

// função de tranferencia de valor
// contaCorrenteJean.transferir(200, conta2);
// console.log(conta2);

//criando a conta apartir das classes
//const conta3 = new ContaCorrente();

// conta3.cliente = new Cliente(); // referente ao objeto cliente3
// conta3.cliente.nome = "Gustavo";  // fazendo atribuição direto
// conta3.cliente.agencia = 103;
// conta3.cliente.cpf = 123456741;

// conta3.depositar(1500);
// conta3.depositar(3500);

// console.log(conta3);

// conta3.sacar(250);
// console.log(conta3);

// função de tranferencia de valor
// conta3.transferir(250, conta2);
// console.log(conta3);

// conta3.sacar(10);
// console.log(conta2.saldo);

// console.log(`\nConta corrente ${cliente1.nome}`);
// console.log(`CPF ${cliente1.cpf} \n`);
// console.log(`Conta corrente ${cliente2.nome}`);
// console.log(`CPF ${cliente2.cpf}`);
