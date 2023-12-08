// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split('\n')
let [N,K] = input.shift().split(' ').map(Number)
const coins = input.map(Number).reverse()

let count = 0
for(const coin of coins){
    if(K === 0) continue
    if(K < coin) continue
    count += Math.floor(K / coin)
    K = K % coin
}
console.log(count)