// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [1, 99999]
const N = input[0]
const result = []
// 소수 라이브러리
const library = {
    2 : true,
    3 : true,
    5 : true,
    7 : true
}

for(let i=0; i<N; i++){
    const NUMBER = input[i+1]
    result.push(getN보다크거가같은소수(NUMBER))
}

console.log(result.join('\n'))

function getN보다크거가같은소수(number){
    let now = number
    while(true){
        // 현재값이 소수인가?
        if(is소수(now)) {
            return now
        }
        else {
            now++
        }
    }
}
function is소수(number){

    // 소수 라이브러리에 이미 있는 경우
    if(library[number]) return true
    // 소수 라이브러리에 없는데 있을 가능성이 있을 경우
    else {
        // 소수검사
        if(number == 0) return false
        if(number == 1) return false
        for(let i=2;i*i<=number;i++){
            if(number%i === 0) return false
        }

        // 소수인 경우 : 라이브러이에 등록 후 true 반환
        library[number] = true
        return true
    }
}