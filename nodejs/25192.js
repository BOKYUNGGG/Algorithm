// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `9
ENTER
pjshwa
chansol
chogahui05
lms0806
pichulia
r4pidstart
swoon
tony9402`.split('\n')
const N = Number(input[0])

let set = new Set()
let count = 0
for(let i=1;i<=N;i++){
    const log = input[i]
    console.log('log : ', log)
    if(log === 'ENTER') {
        console.log('set :', set)
        count = count + set.size
        set = new Set()
    }
    else {
        set.add(log)
    }
}
count = count + set.size
console.log(count)