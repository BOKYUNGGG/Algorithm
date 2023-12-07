const input = `12ab112ab2ab
12ab`.split('\n')

let arr = input[0].split('')
let bomb = input[1]
const bombSize = bomb.length


function solution(array, bomb){
    const ARRAY_SIZE = array.length
    const BOMB_SIZE = bomb.length
    const stack = []

    for(let i=0; i<ARRAY_SIZE; i++){
        stack.push(array[i])

        if(BOMB_SIZE <= stack.length){
            const candidate = stack.slice(-BOMB_SIZE).join('')
            if(candidate === bomb) {
                for(let j=0;j<BOMB_SIZE;j++) stack.pop()
            }
        }
    }
    if(stack.length === 0) console.log('FRULA')
    else console.log(stack.join(''))
    
}
solution(arr, bomb)