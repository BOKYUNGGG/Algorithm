const inputs = require('fs').readFileSync('input.txt').toString().split('\n').map(x=>Number(x))
let max = inputs[0]
let index = 1

for(const [i, e] of inputs.entries()){
    if(e > max) {
        max = e
        index = i +1
    }
}
console.log(max)
console.log(index)