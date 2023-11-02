// 5 -> 3개까지 검사
// 6 -> 3개까지 검사

const input = require('fs').readFileSync('/dev/stdin').toString().trim()

function solution(input){
    
    for(let i=0;i<input.length;i++){
        // console.log(input[i])
        // console.log(input[input.length-i-1])
        if(input[i] !== input[input.length-i-1]) {
            return false
        }
    }
    return true
}
if(solution(input)){
    console.log(1)
}
else console.log(0)
