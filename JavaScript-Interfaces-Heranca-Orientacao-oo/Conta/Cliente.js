// classe é um molde
export class Cliente {
  //acessor
  get cpf() {
    return this._cpf;
  }
  //construtor
  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
   // this.autenticar = 1; //colocando uma chave para autentificação da senha
  }
  //se o cliente tive senha "é obrigatorio"
  autenticar() {
    return true;
  }
}
