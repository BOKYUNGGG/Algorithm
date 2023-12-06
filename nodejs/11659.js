// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5 3
5 4 3 2 1
1 3
2 4
5 5`.split('\n')
const [N, M] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)
const accumulations = []
accumulations.push(numbers.reduce((acc,val)=>{
    accumulations.push(acc)
    return acc + val
}))
const result = []
for(let i=0;i<M;i++){
    const [start, end] = input[i+2].split(' ').map(Number)
    const a = accumulations[start-2] ? accumulations[start-2] : 0
    const b = accumulations[end-1]
    result.push(b-a)
}
console.log(result.join('\n'))