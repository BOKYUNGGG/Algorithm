// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `3
1 2 3
4 5 6
4 9 0`.split('\n').map(element => element.split(' ').map(Number))
const N = Number(input.shift())
const visited = Array.from({length : N}, ()=>Array(3).fill(false))
const result = []
function search(x,y,scores){
    if(y === N-1){
        scores.push(input[y][x])
        result.push(scores)
        return
    }
    

    if(isValid(x-1, y+1)){
        scores.push(input[y][x])
        search(x-1, y+1, scores)
        scores.pop()
    }
    if(isValid(x, y+1)){
        scores.push(input[y][x])
        search(x, y+1, scores)
        scores.pop()
    }
    if(isValid(x+1, y+1)){
        scores.push(input[y][x])
        search(x+1, y+1, scores)
        scores.pop()
    }

}

function isValid(X,Y){
    if(X < 0) return false
    if(N <= X) return false
    if(Y < 0) return false
    if(N <= Y) return false
    return true
}
search(0,0,[])
search(1,0,[])
search(2,0,[])