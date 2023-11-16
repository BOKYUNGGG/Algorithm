// input : want to make
// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const input = '216'

let now = 1
while(true){
    if(Number(input) < now) {
        console.log(0)
        break
    }
    let sum = now
    for(digit of now.toString()){
        sum += Number(digit)
    }
    
    if(sum === Number(input)){
        console.log(now)
        break
    }
    now = now + 1
}