// const N = Number(require('fs').readFileSync('/dev/stdin').toString())
const N = 2
let number = 666
let count = 1
while(true){
    // 666
    const stringNumber = number.toString()
    // 3
    const length = stringNumber.length

    let flag = false
    for(let i=0;i<length;i++){
        for(let j=i+1;j<length;j++){
            for(let k=j+1;k<length;k++){
                if(['6','6','6'] == [stringNumber[i],stringNumber[j],stringNumber[k]]){
                    flag = true
                }
            }
        }
    }
    // true
    if(flag){

        // 1 !== 2
        if(count == N){
            console.log(number)
            break
        }
        number = number + 1
        count++
    }
    // false ex) 668
    else {
        number = number + 1
    }
}