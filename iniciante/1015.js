var input = require('fs').readFileSync('../stdin', 'utf8');
var lines = input.split('\n');

const item = lines.shift();
const item2 = lines.shift();

[x1, y1] = item.split(' ').map(item => Number(item));
[x2, y2] = item2.split(' ').map(item => Number(item));

console.log(`${(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)).toFixed(4)}`);