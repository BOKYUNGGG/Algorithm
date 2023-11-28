// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const input = `3
((
))
())(()`.split('\n')
const result = []
const T = Number(input[0])
for(let i=1; i<=T; i++){
    const str = input[i]
    const stack = []
    const len = str.length
    for(let j=0; j<len;j++){
        const char = str[j]
        if(char === '('){
            stack.push(char)
        }
        else if(char === ')'){
            if(isEmpty(stack)) {
                result.push('NO')
                break
            }
            stack.pop()
        }
        if(j === len-1){
            if(isEmpty(stack)) result.push('YES')
            else result.push('NO')
        }
    }
}
console.log(result.join('\n'))

function isEmpty(array){
    return array.length === 0
}