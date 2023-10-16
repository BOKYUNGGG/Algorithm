const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

const [N, M] = inputs[0].split(' ').map(x=>Number(x))
let basket = Array.from({length:N}, (_,i)=>i+1)

for(let i=0; i<M; i++){
    const [a,b] = inputs[i+1].split(' ').map(x=>Number(x))
    if(a==b) continue
    basket[a-1] = basket[a-1]^basket[b-1]
    basket[b-1] = basket[a-1]^basket[b-1]
    basket[a-1] = basket[a-1]^basket[b-1]
}

console.log(basket.join(' '))