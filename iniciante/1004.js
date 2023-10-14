var input = require("fs").readFileSync('../stdin', 'utf8');
[A, B] = input.split("\n").map(item => parseInt(item));

const PROD = A * B;

console.log(`PROD = ${PROD}`);