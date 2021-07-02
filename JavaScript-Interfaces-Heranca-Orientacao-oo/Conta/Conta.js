// Classe abstrata, classe que não pode ser instânciada
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    //contructor de comparação, não deixa instânciar nenhuma conta direto da classe conta.
    if (this.constructor == Conta) {
      throw new Error(
        "Não deve instânciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata!!"
      );

    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  // fazendo o retorno do saldo
  get saldo() {
    return this._saldo;
  }

  // Metodo abstrato
  sacar() {
    throw new Error("O método sacar da canta é abstrado");
  }

  //metodo privado 
  _sacar(valor, taxa) { // taxa serve para individualizar os comportamentos por classes
    const valorSacado = taxa * valor; // taxa sobre saque
    if (this._saldo >= valorSacado) { 
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  // function de depositar
  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
  }

  // tomar cuidado para não alterar nenhum objeto aqui dentro da função.
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
/*
  teste() {
    console.log("Teste em classe conta ");
  }*/
}
