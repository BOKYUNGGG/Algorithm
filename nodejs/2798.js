// N장의 카드를 놓고
// 3장을 고르는데 M을 넘지 않게 선택


// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = ['10 500','93 181 245 214 315 36 185 138 216 295']
const [N,M] = input.shift().split(' ').map(Number)
const CARDS = input.shift().split(' ').map(Number)
let result = 0
for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
        for(let k=j+1;k<N;k++){
            const sum = CARDS[i] + CARDS[j] + CARDS[k]
            if(result < sum && sum <= M){
                result = sum
            }
        }
    }
}
console.log(result)