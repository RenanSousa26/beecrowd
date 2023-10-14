var input = require("fs").readFileSync("stdin", "utf8");
[raio] = input.split("\n").map(item => parseFloat(item));

let area;

area = 3.14159 * raio ** 2

console.log(`A=${area.toFixed(4)}`)


