const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(input.map((element)=>{
    const [A,B] = element.split(' ').map(Number)
    return A+B
}).join('\n'))