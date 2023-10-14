var input = require('fs').readFileSync('../stdin', 'utf8');
[nome, salario, total] = input.split('\n');

salario = parseFloat(salario);
total = (parseFloat(total) * 0.15);

console.log(`TOTAL = R$ ${(salario + total).toFixed(2)}`);