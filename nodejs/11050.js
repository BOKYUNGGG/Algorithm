const [N,K] = Number(require('fs').readFileSync('/dev/stdin').toString().trim()).split(' ')

console.log((factorial(N)) / (factorial(K) * factorial(N-K)))



function factorial(number){
    if(number === 0) return 1
    return factorial(number -1) * number
}