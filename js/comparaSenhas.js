function compararSenha(senha1, senha2) {
  if (senha1 === senha2) {
    return 'Correto';
  } else { 
    return 'Incorreto';
  }
}

module.exports = compararSenha;
