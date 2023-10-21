const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

const N = Number(inputs[0])
const score = inputs[1].split(' ').map(x=>Number(x))
const max = Math.max(...score)

console.log(sum(score.map(e=>e/max*100))/N)


function sum(array){
    return array.reduce((a,b)=> a+b,0)
}