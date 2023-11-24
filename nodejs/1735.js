// 기약분수 : 분모와 분자의 공약수가 1뿐인 분수

// const [[a,A],[b,B]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>x.split(' ').map(Number))
// const [[a,A],[b,B]] = [[2,7],[3,5]]
let 분자 = a*B + A*b
let 분모 = A*B
while(true){
    const 최대공약수 = GCD(분자, 분모)
    if(최대공약수 !== 1){
        분자 = 분자 / 최대공약수
        분모 = 분모 / 최대공약수
    }
    else{
        break
    }
}
console.log(`${분자} ${분모}`)

function GCD(a,b){
    if(b===0){
        return a
    }
    else {
        return GCD(b, a%b)
    }
}

function LCM(a,b){
    return (a*b) / GCD(a,b)
}