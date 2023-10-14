var input = require('fs').readFileSync('../stdin', 'utf8');
[A, B, C, D] = input.split("\n").map(item => parseInt(item));

console.log(`DIFERENCA = ${(A*B-C*D)}`)