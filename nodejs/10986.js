// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5 3
1 2 3 1 2`.split('\n')
const [N,M] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)

const sumAccs = []
const moduleAccs = []
sumAccs.push(numbers.reduce((acc,val)=>{
    sumAccs.push(acc)
    return acc + val
}))
moduleAccs.push(numbers.reduce((acc,val)=>{
    moduleAccs.push(acc % M)
    return (acc + val) % M
}))
console.log(sumAccs)
console.log(moduleAccs)