const { parse } = require('path');

var input = require('fs').readFileSync('../stdin', 'utf8');
[A,B,C] = input.split("\n");

console.log(`NUMBER = ${Number(A)}\nSALARY = U$ ${(Number(B) * Number(C)).toFixed(2)}`);