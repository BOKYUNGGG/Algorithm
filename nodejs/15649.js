// const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [N, M] = [4, 4]
const visited = Array(N+1).fill(false)

function backtrack(sequence, visited, n, m){
    // base case
    if(sequence.length === m){
        console.log(sequence.join(' '))
        return
    }

    for(let i=1; i<=n; i++){
        if(!visited[i]){
            visited[i] = true
            sequence.push(i)

            backtrack(sequence, visited, n, m)

            visited[i] = false
            sequence.pop()
        }
    }
}
backtrack([], visited, N, M)