// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const input = 10
function factorial(number){
    if(number === 0) return 1
    return factorial(number-1) * number
}
console.log(factorial(input))