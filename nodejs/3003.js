const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x))

let standard = [1,1,2,2,2,8]

for(let i=0;i<6;i++){
    standard[i] = standard[i] - input[i]
}

console.log(standard.join(' '))