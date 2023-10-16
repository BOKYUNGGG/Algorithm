const inputs = require('fs').readFileSync('input.txt').toString().split('\n').map(x=>Number(x))
// students = []
const students = Array.from({length:inputs.length}, ()=>0)
console.log(students)
for(let i=0;i<inputs.length;i++){

}
