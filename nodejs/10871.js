const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

const [N,X] = inputs[0].split(' ').map(x=>Number(x))
const arr = inputs[1].split(' ').map(x=>Number(x))

for(i of arr){
    if(i < X) process.stdout.write(`${i} `)
}
