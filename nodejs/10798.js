// const input = [
//     ['A', 'A', 'B', 'C', 'D', 'D'],
//     ['a', 'f', 'z', 'z'],
//     ['0', '9', '1', '2', '1'],
//     ['a','8','E','W','g','6'],
//     ['P', '5', 'h', '3', 'k', 'x'],
// ]
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>x.split(''))
function reflectMatrix(matrix){
    let row = matrix.length
    let col = Math.max(...matrix.map(x=>x.length))
   
    let answer = []
    for(let c=0;c<col;c++){
        for(let r=0;r<row;r++){
            if(!matrix[r][c]) continue
            const word = matrix[r][c]
            answer.push(word)
        }
    }
    console.log(answer.join(''))
}
reflectMatrix(input)