// 흰색상태 : false
// 검정상태 : true
// 검정상태를 모두 카운팅


// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = `3
3 7
15 7
5 2`.split('\n')
const N = Number(input.shift())
const canvas = Array.from({length : 100}, ()=>Array.from({length : 100}, ()=>false))
let answer = 0
for(let i=0;i<N;i++){
    const [col,row] = input.shift().split(' ').map(x=>Number(x))
    for(let r=row;r<row+10;r++){
        for(let c=col;c<col+10;c++){
            if(!canvas[r][c]) {
                canvas[r][c]=true
                answer++
            }
        }
    }
}
console.log(answer)