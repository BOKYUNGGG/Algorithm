// const [a,b,c,d,e,f] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)
const [a,b,c,d,e,f] = [1, 3, -1, 4, 1, 7]
let flag = false
for(let x=-999;x<=999;x++){
    for(let y=-999;y<=999;y++){
        if(a*x + b*y !== c) continue
        if(d*x + e*y !== f) continue

        console.log(`${x} ${y}`)
        flag = true
        break
    }
    if(flag){
        break
    }
}