// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let input = [50,40,30,20,10]

input.sort((a,b)=>a-b)
let sum = input.reduce((acc,val)=> acc+val, 0)
console.log(Math.floor(sum/5))
console.log(input[2])