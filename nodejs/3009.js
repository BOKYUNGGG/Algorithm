// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>x.split(' ').map(x=>Number(x)))
const input = [[30,20],[10,10],[10,20]]
// a,b c,b a,d c,d
// max max
// max min
// min max
// min min
function solution(array){
    let xMin = {
        count : 0,
        value : Math.min(...[input[0][0], input[1][0], input[2][0]])
    }
    let xMax = {
        count : 0,
        value : Math.max(...[input[0][0], input[1][0], input[2][0]])
    }
    let yMin = {
        count : 0,
        value : Math.min(...[input[0][1], input[1][1], input[2][1]])
    }
    let yMax = {
        count : 0,
        value : Math.max(...[input[0][1], input[1][1], input[2][1]])
    }
    
    for(e of array){
        const x = e[0]
        const y = e[1]

        if(x === xMin.value) xMin.count++
        else xMax.count++

        if(y === yMin.value) yMin.count++
        else yMax.count++
    }

    let result = []
    if(xMin.count === 1) result.push(xMin.value)
    else result.push(xMax.value)
    if(yMin.count === 1) result.push(yMin.value)
    else result.push(yMax.value)
    return result
}
console.log(solution(input).join(' '))