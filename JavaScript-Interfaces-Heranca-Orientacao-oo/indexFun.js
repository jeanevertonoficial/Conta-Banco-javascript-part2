import { Gerente } from "./Funcionarios/Gerente.js";
import { Funcionarios } from "./Funcionarios/Funcionarios.js";
import { Cliente } from "./Conta/Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Jean", 100000, 123654789);
diretor.cadastraSenha("123456789");

const gerente = new Gerente("Everton", 50000, 123345845);
gerente.cadastraSenha("456789");

const cliente4 = new Cliente("Antony", 45245415, 1424);

const gerenteLogado = SistemaAutenticacao.login(gerente, "679");
const estaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteAutenticar = SistemaAutenticacao.login(cliente4, 1424);



console.log(gerenteLogado);
console.log(estaLogado);
console.log(clienteAutenticar);


console.log(`\nNome: ${cliente4.nome}\nCPF: ${cliente4.cpf}\nSenha: ${cliente4._senha}\n`);
