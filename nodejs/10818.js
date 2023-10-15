// inputs
// 5
// 20 10 35 30 7

const inputs = require('fs').readFileSync('input.txt').toString().split('\n')
const N = Number(inputs[0])
const numbers = inputs[1].split(' ').map(x=>Number(x))

console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`)
