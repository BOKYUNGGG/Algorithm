const [A,B] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>Number(x))

console.log(A*B)