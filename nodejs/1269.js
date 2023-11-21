// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
    '3 5',
'1 2 4',
'2 3 4 5 6'
]

const [N,M] = input[0].split(' ').map(Number)
const A = new Set(input[1].split(' '))
const B = new Set(input[2].split(' '))
let count = 0
A.forEach(a =>{
    if(B.has(a)) count++
})

console.log(N+M-count*2)