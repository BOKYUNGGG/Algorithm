const inputs = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(x=>Number(x))
let arr = Array.from({length:42}, ()=>false)
for(element of inputs){
    const rest = element % 42
    arr[rest] = true
}
let answer = 0

for(element of arr){
    if(element) answer += 1
}
console.log(answer)