// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input =`1
1
3`.split('\n')
const T = Number(input[0])
for(let i=0;i<T;i++){
    const N = Number(input[2*i + 1])
    const A = input[2*i + 2].split(' ').map(Number)
    const result = changeHair(A, [], 0)
    if(result.length === 0) console.log(-1)
    else console.log(Math.min(...result))
}

function changeHair(array, result, count){
    console.log('=========================')
    console.log(`array : ${array}, count : ${count}`)
    if(!array.includes(3)) {
        console.log('3있는 것 찾음')
        result.push(count)
        return result
    }
    for(let i=0; i<array.length; i++){
        for(let size=2; i+size <= array.length; size++){
            const xor = array.slice(i, i+size).reduce((acc,val)=>acc^val)
            changeHair([...array.slice(0,i), ...Array.from({length : size}, ()=>xor), ...array.slice(i+size)], result, count+1)
        }
    }
    return result
}