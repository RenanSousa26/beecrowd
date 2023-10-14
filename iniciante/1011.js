var input = require('fs').readFileSync('../stdin', 'utf8');

console.log(`VOLUME = ${((4/3.0) * 3.14159 * input ** 3).toFixed(3)}`)