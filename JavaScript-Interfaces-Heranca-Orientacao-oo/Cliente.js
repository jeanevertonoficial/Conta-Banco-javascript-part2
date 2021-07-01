// classe é um molde
export class Cliente {
//acessor
    get cpf(){
        return this._cpf;
    }
//construtor
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}