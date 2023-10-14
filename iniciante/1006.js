var input = require('fs').readFileSync('../stdin', 'utf8');
[A, B, C] = input.split("\n").map(item => parseFloat(item));

const MEDIA = ((A.toFixed(1) * 2) + (B.toFixed(1) * 3) + (C.toFixed(1) * 5)) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);