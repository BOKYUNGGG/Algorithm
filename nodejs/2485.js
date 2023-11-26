// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [3,1,5001,10001]
const N = input.shift()

let gaps = new Set()
for(let i=1;i<N;i++){
    const gap = input[i] - input[i-1]
    gaps.add(gap)
}
gaps = Array.from(gaps)
const maxGap = GCD_2(gaps)
let count = 0
let now = input[N-1]
let index = N-2

// maxGap = 2
// count = 0
// 현재 위치 = 13 
// 비교할 위치의 인덱스 = 2
while(true){
    if(now < 0) break
    if(index < 0) break
    // 다음 간격
    const next = now - maxGap
    
    // 만약에 다음간격에 이미 심어져 있다면?
    if(next === input[index]){
        now = next
        index--
    }
    // 다음 간격에 나무가 없는 경우
    else{
        count++
        now = now - maxGap
    }
}
console.log(count)

function GCD(a,b){
    if(b===0) return a
    else return GCD(b, a%b)
}
function GCD_2(array){
    const len = array.length
    if(len===1){ 
        return array[0]
    }
    let gcd
    for(let i=0;i<len-1;i++){
        const [A,B] = [array[i], array[i+1]]
        gcd = GCD(A,B)
    }
    return gcd
}