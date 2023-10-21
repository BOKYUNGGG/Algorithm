const input = require('fs').readFileSync('input.txt').toString().split(' ').map(x=>Number(x))

function sum(array){
    return array.reduce((acc,value)=> acc+value)
}
console.log(sum(input))