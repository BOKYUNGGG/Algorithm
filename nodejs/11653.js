// let input = Number(require('fs').readFileSync('/dev/stdin'))
let input = 72
function divideAndReturn(number){
    for(let i=2;i<=number;i++){
        if(number % i === 0){
            console.log(i)
            return number / i
        }
    }
    return number
}

while(true){
    input = divideAndReturn(input)
    if(input === 1) break
}