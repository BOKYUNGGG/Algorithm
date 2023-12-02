// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = `5
-1
-2
-3
-1
-2`.split('\n').map(Number)
const N = input.shift()

function 산술평균(array){
    const result = Math.round(array.reduce((acc,val)=> acc+val) / array.length)
    return result === -0 ? 0 : result
}
function 중앙값(sortedArray){
    return sortedArray[Math.floor(sortedArray.length / 2)]
}
function 최빈값(array){
    const library = {}
    array.forEach((element, index)=>{
        if(!library[element]) library[element] = 1
        else library[element]++
    })
    let largest = {
        key : '',
        value : 0
    }
    for(const [key, value] of Object.entries(library)){
        if(largest.value < value){
            largest.key = [Number(key)]
            largest.value = value
        }
        else if(largest.value === value){
            largest.key.push(Number(key))
        }
    }
    largest.key.sort((a,b)=> a-b)
    return largest.key.length === 1 ? Number(largest.key[0]) : Number(largest.key[1])
}
function 범위(array){
    let min = Math.min(...array)
    let max = Math.max(...array)
    return max - min
}
input.sort((a,b)=>a-b)
console.log(산술평균(input))
console.log(중앙값(input))
console.log(최빈값(input))
console.log(범위(input))