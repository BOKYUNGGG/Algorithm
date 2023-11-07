const input = `0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`.split('\n').map(row => row.split(' ').map(x=>Number(x)))

let largest = {
    value : null,
    row : null,
    col : null
}
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(!largest.value){
            largest.col = i
            largest.row = j
            largest.value = input[i][j]
        }
        else if(largest.value < input[i][j]) {
            largest.col = i
            largest.row = j
            largest.value = input[i][j]
        }
    }
}
console.log(largest.value)
console.log(largest.col+1, largest.row+1)