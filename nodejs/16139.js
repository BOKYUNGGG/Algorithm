// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `seungjaehwang
4
a 0 5
a 0 6
a 6 10
a 7 10`.split('\n')

const library = {}
const Q = Number(input[1])

const accumulations = []
input[0].split('').map((element)=>{
    if(!library[element]) {
        library[element] = 1 
        accumulations.push({...library})
    }
    else {
        library[element]++
        accumulations.push({...library})
    }
})

const result = []
for(let i=2;i<2+Q;i++){
    const [char, start, end] = input[i].split(' ')
    
    let a = 0
    let b = 0

    if(accumulations[Number(end)][char]) b = accumulations[Number(end)][char]
    if(start <= 0) a = 0
    else if(accumulations[Number(start)-1][char]) a = accumulations[Number(start)-1][char]
    result.push(b-a)
}
console.log(result.join('\n'))