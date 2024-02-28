const compararSenha = require('../js/comparaSenhas');

test('Testa se as senhas são iguais', () => {
  expect(compararSenha('senha1', 'senha1')).toBe('Correto');
});

test('Testa se as senhas são diferrentes', () => {
  expect(compararSenha('senha1', 'senha2')).toBe('Incorreto');
});
