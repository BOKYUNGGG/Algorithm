// N(1) : 666
// N(2) : 1666
// N(3) : 2666
// N(4) : 3666
// N(5) : 4666
// N(6) : 5666
// N(7) : 6660
// N(8) : 6661
// N(9) : 6662
const GOAL = Number(require('fs').readFileSync('/dev/stdin').toString())
let count = 0
let number = 665
while(true){
    const STRING_NUMBER = number.toString()
    // 666이 들어가 있을 때 : 666
    if(is666(STRING_NUMBER)){
        // 카운팅을 한 뒤
        count++
        // 골 일 때
        if(GOAL === count){
            console.log(number)
            break
        }
        // 골 아닐 때
        else{
            number++
            continue
        }
    }
    // 666이 들어가 있지 않다면 : 665
    else{
        number++
        continue
    }
}
function is666(string){
    const len = string.length
    for(let i=0;i<=len-3;i++){
            const temp =[string[i],string[i+1],string[i+2]].join('')            
            if(temp === '666'){
                return true
            }
        }
    return false
}