//const [N,B] = require('fs').readFileSync('/dev/stdin').toString().split(' ')
const [N,B] = ['60466175', '36'].map(x=>Number(x))
console.log(N.toString(B).toUpperCase())
