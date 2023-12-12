// const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [N, M] = [3, 3]
const result = []
function backtrack(sequence, n, m){
    // base case
    if(sequence.length === m){
        result.push(sequence.join(' '))
        return
    }

    for(let i=1; i<=n; i++){
        if(i < sequence[sequence.length - 1]) continue
        sequence.push(i)
        backtrack(sequence, n, m)
        sequence.pop()
    }
}
backtrack([], N, M)
console.log(result.join('\n'))