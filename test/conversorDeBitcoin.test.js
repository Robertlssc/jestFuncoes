const conversorDeBitcoin = require('../js/bitcoin');

test('Converte 1 butciub para real com preço de R$300.000,00', () => {
  expect(conversorDeBitcoin(1)).toBe(300000);
});
