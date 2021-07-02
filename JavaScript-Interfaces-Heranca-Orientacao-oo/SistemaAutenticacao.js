/**
 * Ser autenticavel significa ter propriedade "autenticar"
 * Ducky type 
 * 
 */

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&  //verifica se existe uma chave dentro do objeto
      autenticavel.autenticar instanceof Function 
    );
  }
}
