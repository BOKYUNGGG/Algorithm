let [A,B] = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let a = A.split('')
let b = B.split('')

// for(let i=0;i<A.length;i++){
//     a[i] = A[i]
//     b[i] = B[i]
// }

A = Number(a.reverse().join(''))
B = Number(b.reverse().join(''))
if(A<B) console.log(B)
else console.log(A)