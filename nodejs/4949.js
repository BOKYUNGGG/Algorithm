const input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split('\n')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = input.length - 1
const result = []

for(let i=0;i<T;i++){
    const str = input[i]
    const len = str.length
    const stack = []
    
    for(let j=0;j<len;j++){
        const char = str[j]
        if(char === '('){
            stack.push(char)
        }
        else if(char === ')'){
            if(isEmpty(stack)){
                result.push('no')
                break
            }
            else if(top(stack) === '('){
                stack.pop()
            }
            else{
                result.push('no')
                break
            }
        }
        else if(char === '['){
            stack.push(char)
        }
        else if(char === ']'){
            if(isEmpty(stack)){
                result.push('no')
                break
            }
            else if(top(stack) === '['){
                stack.pop()
            }
            else{
                result.push('no')
                break
            }
        }

        if(j === len-1){
            if(isEmpty(stack)){
                result.push('yes')
            }
            else {
                result.push('no')
            }
        }
    }
}
console.log(result.join('\n'))
function isEmpty(array){
    return array.length === 0
}
function top(array){
    return array[array.length-1]
}