// const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const N = 8
const BOARD = Array.from({length : N}, ()=>Array.from({length : N}, ()=> '.'))

function isValid(row, col, size){
    if(row < 0) return false
    if(col < 0) return false
    if(size <= row) return false
    if(size <= col) return false
    return true
}
function isQueen(row, col, board, size){
    for(let r=row; 0<=r; r--){
        if(board[r][col] === 'Q') return true
    }
    // 왼쪽 위 대각선 방향 확인
    for(let r=row, c=col; 0<=r && 0<=c; r--,c--){
        if(board[r][c] === 'Q') return true
    }
    // 오른쪽 위 대각선 방향 확인
    for(let r=row, c=col; 0<=r && c<size; r--,c++){
        if(board[r][c] === 'Q') return true
    }

    return false
}
let count = 0
function backtrack(row, board, size){
    if(size===row){
        count++
        return
    }

    for(let col=0; col<size; col++){
        if(isValid(row, col, size)){
            if(!isQueen(row, col, board, size)){
                board[row][col] = 'Q'
                backtrack(row+1, board, size)
                board[row][col] = '.'
            }
        }
    }
}
backtrack(0, BOARD, N)
console.log(count)