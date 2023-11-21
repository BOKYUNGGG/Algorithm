// S(1) = 1 + 1 + 1 + 1 = 4
// S(2) = 2 + 2 + 2 + 2 = 8
// S(3) = 3 + 3 + 3 + 3 = 12
// S(N) = N + N + N + N = 4*N

const input = Number(require('fs').readFileSync('/dev/stdin').toString())
console.log(4*input)