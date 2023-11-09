// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>Number(x))
const input = `3
124
25
194`.split('\n')
const T = input.shift()
const units = [25,10,5,1]
// quarter : 25,
// dime : 10,
// nickel : 5,
// penny : 1

for(let i=0;i<T;i++){
    let coins = []
    let exchange = input.shift() // ex) 124센트
    for(unit of units){
        const coinCount = Math.floor(exchange / unit)
        coins.push(coinCount)
        const rest = exchange % unit
        exchange = rest
    }
    console.log(coins.join(' '))
}
