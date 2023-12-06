// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `1 1
1`.split('\n')
const [N,K] = input[0].split(' ').map(Number)
const temperatures = input[1].split(' ').map(Number)

const sum = []
sum.push(temperatures.reduce((acc,val)=>{
    sum.push(acc)
    return acc+val
}))

let largest
for(let i=K-1;i<N;i++){
    const a = sum[i]
    const b = sum[i-K] === undefined ? 0 : sum[i-K]
    if(!largest) largest = a-b
    else{
        if(largest < a-b){
            largest = a-b
        }
    }
}

console.log(largest)