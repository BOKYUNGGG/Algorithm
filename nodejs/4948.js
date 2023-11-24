// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [1,10,13,100,10000,100000,0]
let primeNumbers = {
    2 : true,
    3 : true,
    5 : true,
    7 : true,
}
for(let i=0;i<input.length;i++){
    if(input[i] === 0) break
    console.log(countPrimeNumbers(input[i]))
}

function isPrimeNumber(number){
    if(number===1) return false
    for(let i=2;i*i<=number;i++){
        if(number%i===0) return false
    }
    primeNumbers[number] = true
    return true
}
function countPrimeNumbers(n){
    let count = 0
    for(let i=n+1;i<=2*n;i++){
        if(primeNumbers[i]) {
            count++
            continue
        }
        if(isPrimeNumber(i)) {
            count++
            continue
        }
    }
    return count
}
