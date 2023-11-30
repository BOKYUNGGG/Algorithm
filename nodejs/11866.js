// const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

// (7, 3)
// i  0  1  2  3  4  5  6 
//    1  2  3- 4  5  6  7  
//    1  2  4  5  6- 7
//    1  2- 4  5  7
//    1  4  5  7-
//    1  4  5-
//    1- 4
//    4-

// removed
//        3  6  2  7  5  1  4
// i(n)   2  4  1  3  2  0  0

// i(1) = {(0+3) - 1} % 7 = 2
// i(2) = {(2+3) - 1} % 6 = 4
// i(2) = {(4+3) - 1} % 5 = 1
// i(2) = {(1+3) - 1} % 4 = 3
// i(2) = {(3+3) - 1} % 3 = 2
// i(2) = {(2+3) - 1} % 2 = 0
// i(2) = {(0+3) - 1} % 1 = 0
// i(n) = {(i(n-1) + K) - 1} % size

const [N,K] = [7, 3]

let persons = Array.from({length : N}, (_,index)=>index+1)
const result = []

let index = 0
let size = N
while(true){
    if(size === 1) {
        result.push(persons[0])
        break
    }
    const removedIndex = (index + K - 1) % size
    persons = persons.filter((element, index)=>{
        if(index === removedIndex) result.push(element)
        return index!==removedIndex
    })
    index = removedIndex
    size--
}
console.log('<' +result.join(', ') +'>')