export class Funcionarios {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this.bonificacao = 1;
    this._senha;
  }
  
  //autenticar a senha com mais segurança 
  autenticar(senha){
      return senha == this._senha;
  }
  cadastraSenha(senha){
      this._senha = senha;
  }
}
