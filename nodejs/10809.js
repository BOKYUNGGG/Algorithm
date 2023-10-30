// char to ascii
// console.log('a'.charCodeAt(0)) // 97
// console.log('z'.charCodeAt(0)) // 122
// console.log('A'.charCodeAt(0)) // 65
// console.log('Z'.charCodeAt(0)) // 90


const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(answer)=>{
    const word = answer
    solution(word)
    rl.close()
}).on('close', ()=>{
    process.exit()
})


function solution(input){
    
    let arr = Array.from({length:26}, ()=>-1)
    for(let i=0;i<input.length;i++){
        const indexOfChar = input[i].charCodeAt(0) - 97
        if(arr[indexOfChar] !== -1) continue
        arr[indexOfChar] = i
    }

    console.log(arr.join(' '))
}