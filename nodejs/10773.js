const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
//const input = [10,1,3,5,4,0,0,7,0,0,6]

const K = input[0]
const stack = Array.from({length : K})
for(let i=1;i<=K;i++){
    const integer = input[i]
    if(integer === 0){
        stack.pop()
    }
    else {
        stack.push(integer)
    }
}
console.log(stack)
console.log(sum(stack))
function sum(array){
    return array.reduce((acc,val)=> {
        if(typeof val === 'number'){
            return acc + val
        }
        else return acc
    }, 0)
}