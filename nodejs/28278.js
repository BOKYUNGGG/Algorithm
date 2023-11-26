// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `9
4
1 3
1 5
3
2
5
2
2
5`.split('\n')
const N = Number(input[0])
const stack = Array.from({length : 1048576})
const result = []
var count = 0
for(let i=1;i<=N;i++){
    const instruction = input[i]
    if(instruction[0]==='1'){
        const [_, integer] = instruction.split(' ').map(Number)
        count++
        stack.push(integer)
    }
    else if(instruction[0]==='2'){
        if(count === 0) result.push(-1)
        else {
            count--
            result.push(stack.pop())
        }
    }
    else if(instruction[0]==='3'){
        result.push(count)
    }
    else if(instruction[0]==='4'){
        if(count === 0) result.push(1)
        else result.push(0)  
    }
    else if(instruction[0]==='5'){
        if(count === 0) result.push(-1)
        else result.push(...stack.slice(-1))
    }
}
console.log(result.join('\n'))