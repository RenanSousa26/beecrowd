var input = require('fs').readFileSync('../stdin', 'utf8');
var linhas = input.split('\n');

const item = linhas.shift();
const item2 = linhas.shift();

[codigo, peca, valor] = item.split(" ").map(item => Number(item));
[codigo2, peca2, valor2] = item2.split(" ").map(item => Number(item));

const total = (peca * valor.toFixed(2)) + (peca2 * valor2.toFixed(2));

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);