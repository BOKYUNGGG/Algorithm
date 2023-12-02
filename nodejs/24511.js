// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5
1 1 1 1 1
1 2 3 4 5
3
1 3 5`.split('\n')

// N : queuestack을 구성하는 자료구조의 개수
const N = Number(input[0])

// A : 길이 N의 수열 A. 0이면 queue, 1이면 stack
const A = input[1].split(' ').map(Number)

// B : 길이 N의 수열 B.
const B = input[2].split(' ').map(Number)

// M : 삽입할 수열의 길이 M(1<=M<=100,000)
const M = Number(input[3])

// C : queuestack에 삽입할 원소를 담고 있는 길이 M의 수열
const C = input[4].split(' ').map(Number)


const array = [...C.reverse(),...B.filter((value,index)=>{
    return A[index] === 0
})]
console.log(array)
console.log(array.slice(-M).reverse().join(' '))
