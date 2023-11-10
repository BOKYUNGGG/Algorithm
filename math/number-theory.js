// 최대공약수
function GCD(a,b){
    if(b === 0){
        return a
    }
    else {
        return GCD(b, a%b)
    }
}
console.log(GCD(24,36))
// 최소공배수
function LCM(a,b){
    return (a * b) / GCD(a,b)
}
console.log(LCM(24,36))