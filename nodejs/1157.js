//const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const input = 'zZa'.split('').map(x=>x.toUpperCase())
const info = {}

for(let i=0;i<input.length;i++){
    if(!info[input[i]]) info[input[i]] = 0
    info[input[i]] += 1
}

let largest = {
    value : null,
    count : 0
}
for(const [char,count] of Object.entries(info)){
    if(largest.count < count){
        largest.count = count
        largest.value = char
    }
    else if(largest.count === count){
        largest.value = '?'
    }
}
console.log(largest.value)