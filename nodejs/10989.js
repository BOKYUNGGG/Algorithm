// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [10,
    5,
    2,
    3,
    1,
    4,
    2,
    3,
    5,
    1,
    7]
const N = input.shift()
const arr = Array.from({length : 10000}, ()=>0)
for(let i=0; i<N; i++){
    arr[input[i] - 1] += 1
}
for(let i=0;i<arr.length;i++){
    const count = arr[i]
    for(let j=0;j<count;j++){
        console.log(i+1)
    }
}