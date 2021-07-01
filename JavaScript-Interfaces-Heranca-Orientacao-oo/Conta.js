export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
      //contructor de comparação 
    if (this.constructor == Conta) {
      console.log("Não pode Fazer este operação por aqui, não deve instânciar um objeto do tipo conta!!");
    }
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
  // function de sacar
  sacar(valor) {
    let taxa = 1
    return this._sacar(valor, taxa); // vai retornar do _sacar privado
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
