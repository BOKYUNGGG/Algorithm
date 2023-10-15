const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const T = Number(input[0])
for(let i=0; i<T;i++){
    const [A,B] = input[i+1].split(' ').map(x=>Number(x))
    console.log(`Case #${i+1}: ${A+B}`)
}