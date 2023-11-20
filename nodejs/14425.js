// const input  = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['3 3',
    'a',
    'b',
    'c',
    'a',
    'a',
    'a',

]
const [N, M] = input.shift().split(' ').map(Number)
const set = new Set(input.slice(0,N))
const array = input.slice(N)
let count = 0
for(let i=0;i<array.length;i++){
    if(set.has(array[i])) count ++
}
console.log(count)
