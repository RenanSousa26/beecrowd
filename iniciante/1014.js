var input = require('fs').readFileSync('../stdin', 'utf8');
[A, B] = input.split('\n').map(item => Number(item));
console.log(`${(A/B).toFixed(3)} km/l`);
