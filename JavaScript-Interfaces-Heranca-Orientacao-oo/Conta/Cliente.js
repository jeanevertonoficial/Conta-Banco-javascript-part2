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
  }
  //se o cliente tive senha "é obrigatorio"
  autenticar(senha) {
    if (senha === this._senha) {
      return senha;
    } else {
      console.log("Senha invalida, tente novamente.");
      //throw new Error("Senha invalida!");
    }
  }
}
