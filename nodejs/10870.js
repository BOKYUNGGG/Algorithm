const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
// const input = 10
const fibo = []
for(let i=0; i<=input;i++){
    if(i === 0) {
        fibo.push(0)
        continue
    }
    else if(i===1){
        fibo.push(1)
        continue
    }
    fibo.push(fibo[i-2] + fibo[i-1])
}
console.log(fibo[input])