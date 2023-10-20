// const inputs = require('fs').readFileSync('input.txt').toString().split('\n')
const inputs = ['5 4', '1 2','3 4','1 4','2 2']

const [N, M] = inputs[0].split(' ').map(x=>Number(x))

// basket = [1, 2, 3, ...]
const basket = Array.from({length : N}, (_,i)=>i+1)

for(let i=0;i<M;i++){
    const [a,b] = inputs[i+1].split(' ').map(x=>Number(x))
    // a,b = 1,2
    // console.log('a,b =', a, b) 

    const sliced = basket.slice(a-1,b)
    // sliced = 1, 2
    // console.log('sliced = ', sliced)

    const reversed = sliced.reverse()
    // reversed = 2, 1
    // console.log('reversed = ', reversed)

    let k=0
    for(let j=a-1; j<b; j++){
        basket[j] = reversed[k]
        k += 1
    }
}
console.log(basket.join(' '))
