const inputs = require('fs').readFileSync('input.txt').toString().split('\n').map(x=>Number(x))
// students = [ false, false, ... ]
const students = Array.from({length:30}, ()=>false)

for(let i=0;i<inputs.length;i++){
    students[inputs[i]-1] = true
}
console.log(students)
let count = 0
for(let [i,v] of students.entries()){
    if(count == 2) {
        break
    }
    if(!v) {
        console.log(i+1)
        count += 1
    }
}