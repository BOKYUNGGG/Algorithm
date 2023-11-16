// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = [
    '10 13',
"BBBBBBBBWBWBW",
"BBBBBBBBBWBWB",
"BBBBBBBBWBWBW",
"BBBBBBBBBWBWB",
"BBBBBBBBWBWBW",
"BBBBBBBBBWBWB",
"BBBBBBBBWBWBW",
"BBBBBBBBBWBWB",
"WWWWWWWWWWBWB",
"WWWWWWWWWWBWB",
]
const [N, M] = input[0].split(' ').map(Number)
const board = input.slice(1).map(element => element.split(''))
const WHITE = ['WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW']
const BLACK = ['BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB']


// x,y를 시작점으로 하는 8*8보드 안에 잘못된 색 카운트하기
function countWrongSites(color,x,y){
    let count = 0
    for(let i=x;i<x+8;i++){
        for(let j=y;j<y+8;j++){
            // if x : 3, y : 4, color : white
            // board[3][4], WHITE[0][0] 부터 비교시작
            if(board[i][j] !== color[i-x][j-y]) count++
        }
    }
    return count
}

let array = []
for(let i=0;i<N-7;i++){
    for(let j=0;j<M-7;j++){
        array.push(countWrongSites(WHITE, i, j))
        array.push(countWrongSites(BLACK, i, j))
    }   
}
console.log(Math.min(...array))