// 풀이 보러가기 https://dev-craft-life.notion.site/2fe9a26f014e4cf78993ad21c456b9a1
// const input = require('fs').readFileSync('/dev/stdin').toString().trim()

// - 뒤에 있는 +는 모조리 -로 바꿀 수 있다.
const input = '55-50+40'
const numbers = input.split(/[-+]/).map(Number)
const operators  = input.split(/[0123456789]/).filter((element)=> element !== '')

for(let i=0;i<operators.length;i++){
    if(i===0) continue
    if(operators[i-1] === '-' && operators[i] === '+') operators[i] = '-'
}

let result = numbers[0]
let numbers_index = 1
let operators_index = 0
while(true){
    if(numbers_index === numbers.length) break

    if(operators[operators_index] === '+'){
        result = result + numbers[numbers_index]
        numbers_index++
        operators_index++
    }
    else{
        result = result - numbers[numbers_index]
        numbers_index++
        operators_index++
    }
    
}

console.log(result)