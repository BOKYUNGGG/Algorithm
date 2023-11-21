// const [x,y,w,h] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x))
const [x,y,w,h] = [161,181,762,375]
function smaller(a,b){
    if(a<b){
        return a
    }
    return b
}

console.log(smaller(smaller(w-x, h-y), smaller(x,y)))