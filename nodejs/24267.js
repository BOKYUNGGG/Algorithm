const input = require('fs').readFileSync('input.txt').toString().trim()

const N = BigInt(input)
const N1 = BigInt(input-1)
const N2 = BigInt(input-2)
console.log((N * N1 * N2/ BigInt(6)).toString())
console.log(3)
// console.log(`${BIG_INPUT * (BIG_INPUT-1) * (BIG_INPUT-2) / 6}`)