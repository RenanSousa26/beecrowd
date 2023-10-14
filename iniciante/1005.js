var input = require('fs').readFileSync('../stdin', 'utf8');
[A, B] = input.split('\n').map(item => parseFloat(item));

const MEDIA = ((A.toFixed(1) * 3.5) + (B.toFixed(1) * 7.5))/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);