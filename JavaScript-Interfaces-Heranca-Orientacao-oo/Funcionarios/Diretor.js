import { Funcionarios } from "./Funcionarios.js";

export class Diretor extends Funcionarios {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this.bonificacao = 2;
  }
}
