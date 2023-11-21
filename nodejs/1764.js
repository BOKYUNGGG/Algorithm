// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
    '3 4',
'ohhenrie',
'charlie',
'baesangwook',
'obama',
'baesangwook',
'ohhenrie',
'clinton',
]
const [N,M] = input[0].split(' ').map(Number)

const obj = {}
for(let i=0;i<N;i++){
    obj[input[i+1]] = true
}
const result = []
for(let i=0; i<M;i++){
    const name = input[i+N+1]
    if(obj[name]) result.push(name)
}
console.log(result.length)
console.log(result.sort().join('\n'))