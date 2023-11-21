const [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

function GCD(a,b){
    if(b === 0 ){
        return a
    }
    else{
        return GCD(b, a%b)
    }
}
function LCM(a,b){
    return (a*b) / GCD(a,b)
}
console.log(LCM(A,B))