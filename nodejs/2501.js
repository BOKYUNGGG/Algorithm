// const [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x))
const [N, K] = [6, 4]
let count = 0
for(let i = 1; i<=N; i++){
    // i가 N의 약수라면
    if(N%i === 0){
        count++
        if(count === K) {
            console.log(i)
            break
        }
    }
}
if(count < K){
    console.log(0)
}