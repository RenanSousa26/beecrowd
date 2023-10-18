var input = require('fs').readFileSync('../stdin', 'utf8');
const A = input.split(" ").reduce((acum, item) => acum > item ? Number(acum) : Number(item), 0);
console.log(`${A} eh o maior`);