//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
    '5',
    '6 3 2 10 -10',
    '8',
    '10 9 -5 2 3 4 5 -10'
]
const N = Number(input.shift())
const cards = input.shift().split(' ').map(Number)
const M = Number(input.shift())
const numbers = input.shift().split(' ').map(Number)

const library = {}
cards.forEach((card)=>{
    library[card] = true
})
console.log(numbers.map(number=>library[number] ? 1 : 0).join(' '))