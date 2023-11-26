const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(Math.floor(Math.sqrt(N)))

// 1 true
// 1 true false
// 1 true false false
// 2 true false false true
// 2 true false false true false
// 2 true false false true false false
// 2 true false false true false false false
// 2 true false false true false false false false
// 3 true false false true false false false false true
// 3 true false false true false false false false true false
// 3 true false false true false false false false true false false
// 3 true false false true false false false false true false false false
// 3 true false false true false false false false true false false false false
// 3 true false false true false false false false true false false false false false
// 3 true false false true false false false false true false false false false false false
// 4 true false false true false false false false true false false false false false false true
// 4 true false false true false false false false true false false false false false false true false
// 4 true false false true false false false false true false false false false false false true false false
// 4 true false false true false false false false true false false false false false false true false false false
// 4 true false false true false false false false true false false false false false false true false false false false
// 4 true false false true false false false false true false false false false false false true false false false false false
// 4 true false false true false false false false true false false false false false false true false false false false false false
// 4 true false false true false false false false true false false false false false false true false false false false false false false
// 4 true false false true false false false false true false false false false false false true false false false false false false false false
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true false
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true false false
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true false false false
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true false false false false
// 5 true false false true false false false false true false false false false false false true false false false false false false false false true false false false false false