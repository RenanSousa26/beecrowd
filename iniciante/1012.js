var input = require('fs').readFileSync('../stdin', 'utf8');

[A,B,C] = input.split(" ").map(item => parseFloat(item));

console.log(`TRIANGULO: ${((A*C)/2).toFixed(3)}\nCIRCULO: ${(3.14159 * (C ** 2)).toFixed(3)}\nTRAPEZIO: ${(((A + B) * C)/2).toFixed(3)}\nQUADRADO: ${(B ** 2).toFixed(3)}\nRETANGULO: ${(A * B).toFixed(3)}`);