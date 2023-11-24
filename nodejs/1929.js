// const [N,M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [N,M] = [3,16]
let result = []
for(let i=N; i<=M;i++){
    if(isPrimeNumber(i)) result.push(i)
}
console.log(result.join('\n'))

function isPrimeNumber(number){
    if(number === 0) return false
    if(number === 1) return false
    for(let i=2;i*i<=number;i++){
        if(number % i == 0) return false
    }
    return true
}