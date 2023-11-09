// const N = Number(require('fs').readFileSync('/dev/stdin').toString())
const N = 1
let windows = [1]
let windowsIndex = 0
let sum = 1
while(true){
    let nextWindow = 6 * (windowsIndex+1)

    // console.log(`windows = ${windows}`)
    // console.log(`sum = ${sum}`)
    // console.log(`index = ${windowsIndex}`)
    // console.log(`nextWindow = 6 * (${windowsIndex} + 1) = ${nextWindow}`)
    // console.log(`${N} < ${sum} + ${nextWindow} -> ${N < sum + nextWindow}`)
    // console.log('===================')

    if(N <= sum + nextWindow){
        console.log(windows.length+1)
        break
    }
    else{
        windows.push(nextWindow)
        sum = sum + nextWindow
        windowsIndex++
    }
}
// 13 = 1 + 6 + 12 - something
// 30 = 1 + 6 + 12 + 18 - something
// i       =  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 
// L(i)    =  1 2 2 2 2 2 2 3 3 3  3  3  3  3  3  3  3  3  3  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  5 
// windows = (1)(    6    ) (               12             )  (                         18                       )    
