const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = Number(input)

console.log(N*N - N)