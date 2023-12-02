const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(factorial(input))

function factorial(number){
    if(number === 0) return 1
    return factorial(number -1) * number
}