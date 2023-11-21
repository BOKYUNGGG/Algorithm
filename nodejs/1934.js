// 최대공약수
function GCD(a,b){
    if(b === 0){
        return a
    }
    else {
        return GCD(b, a%b)
    }
}

// 최소공배수
function LCM(a,b){
    return (a * b) / GCD(a,b)
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
for(let i=0;i<N;i++){
    const [A,B] = input.shift().split(' ').map(Number)
    console.log(LCM(A,B))
}