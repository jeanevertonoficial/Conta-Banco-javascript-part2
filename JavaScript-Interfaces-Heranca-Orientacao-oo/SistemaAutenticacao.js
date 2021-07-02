/**
 * Ser autenticavel significa ter propriedade "autenticar"
 */

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}