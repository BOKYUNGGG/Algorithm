const input = require('fs').readFileSync('dev/stdin').toString()

let result = []
for(e of input){
    if(e === 'A' || e === 'B' || e === 'C') result.push(3)
    else if(e === 'D' || e === 'E' || e === 'F') result.push(4)
    else if(e === 'G' || e === 'H' || e === 'I') result.push(5)
    else if(e === 'J' || e === 'K' || e === 'L') result.push(6)
    else if(e === 'M' || e === 'N' || e === 'O') result.push(7)
    else if(e === 'P' || e === 'Q' || e === 'R' || e === 'S') result.push(8)
    else if(e === 'T' || e === 'U' || e === 'V') result.push(9)
    else if(e === 'W' || e === 'X' || e === 'Y' || e === 'Z') result.push(10)
}

console.log(result.reduce((acc,val)=>{
    return acc+val
}))