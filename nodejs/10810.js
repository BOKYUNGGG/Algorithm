const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

const [N, M] =  inputs[0].split(' ').map(x=>Number(x)) // 바구니 개수, 공을 넣는 횟수
let basket = Array.from( { length:N }, ()=>0 ) // 바구니 개수(N) 크기의 배열 생성 및 초기값 설정

// 공 M번 넣기
for(let i=0; i<M; i++){
    let [a,b,c] = inputs[i+1].split(' ').map(x=>Number(x)) // a부터 b까지 "c번이 적힌 공"을 넣기
    for(a;a<=b;a++){
        basket[a-1] = c 
    }
}
console.log(basket.join(' ')) 
