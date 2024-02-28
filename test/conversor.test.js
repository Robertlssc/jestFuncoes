const conversorDeTemperatura = require('../js/conversor');

test('verifica se 35ºC equivale a 95ºF', () => {
  expect(conversorDeTemperatura(35)).toBe(95);
});
