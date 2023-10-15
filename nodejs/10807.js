// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

const N = Number(inputs[0])
const target = Number(inputs[2])
let result = 0
inputs[1].split(' ').map(x=>{
    const X = Number(x)
    if(X == target){
        result+=1
    }
})
console.log(result)


