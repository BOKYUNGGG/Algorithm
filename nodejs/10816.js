// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>x.split(' ').map(Number))

const input = [
    '10',
'6 3 2 10 10 10 -10 -10 7 3',
'8',
'10 9 -5 2 3 4 5 -10',
].map(x=>x.split(' '))

const library = {}

input[1].forEach((element, index) => {
    if(!library[element]) library[element] = 1
    else  library[element]++
})


console.log(input[3].map(element=>{
    if(library[element]) return library[element]
    else return 0
}).join(' '))