// const input = ['4', '1 3 5 7']
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input.shift())
  
function isSosu(number){
    if(number === 1) return false
    for(let i=2; i<=number/2; i++){
        if(number % i === 0) return false
    }
    return true
}

let count = 0
const numbers = input.shift().split(' ').map(x=>Number(x))
for(number of numbers){
    if(isSosu(number)) {
        count++
    }
}
console.log(count)