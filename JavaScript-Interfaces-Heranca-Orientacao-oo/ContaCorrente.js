import { Conta } from "./Conta.js";

// classe conta Corrente 
export class ContaCorrente extends Conta {
  static numeroDeContas = 0; // metodo static contador de contas
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // medoto para chamar as class herdeiras do extends
    ContaCorrente.numeroDeContas += 1; // metodo contador
  }
/*
  teste() {
    super.teste();
    console.log("Teste em classe conta corrente");
  }*/

  // function de sacar, Sobre escreve o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1; // taxa de  10%
    return this._sacar(valor, taxa);
  }
}