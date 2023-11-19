// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)
let input = [50,40,30,20,10]



input.sort((a,b)=>a-b)
let sum = input.reduce((acc,val)=> acc+val) / 5
console.log(sum)
console.log(input[2])