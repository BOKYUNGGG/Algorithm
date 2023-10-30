const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let result = 0
for(e of input[1]){
    result += Number(e)
}
console.log(result)