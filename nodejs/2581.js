// const [N,M] = [64,65]
const [N,M] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>Number(x))
function isSosu(number){
    if(number === 1) return false
    for(let i=2; i<=number/2; i++){
        if(number % i === 0) return false
    }
    return true
}
function sum(array){
    return array.reduce((acc, val)=>acc+val)
}

let array = []
for(let i=N;i<=M;i++){
    if(isSosu(i)) array.push(i)
}

if(array.length === 0){
    console.log(-1)
}
else {
    console.log(sum(array))
    console.log(array[0])
}