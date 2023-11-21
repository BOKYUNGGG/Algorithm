//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
    '5',
    '2 4 -10 4 -9'
]
const N = Number(input.shift())
const array = input.shift().split(' ').map(Number)
const set = new Set(array)
const sortedArray = [...set].sort((a,b)=>a-b)
const obj = {}
sortedArray.forEach((index,element)=>{
    obj[index] = element
})
console.log(array.map(x=>obj[x]).join(' '))