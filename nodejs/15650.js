// const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [N, M] = [3, 1]
const visited = Array(N+1).fill(false)

function backtrack(sequence, start, visited, n, m){
    // base case
    if(sequence.length === m){
        console.log(sequence.join(' '))
        return
    }

    for(let i=start; i<=n; i++){
        if(!visited[i]){
            visited[i] = true
            sequence.push(i)

            backtrack(sequence, i+1, visited, n, m)

            visited[i] = false
            sequence.pop()
        }
    }
}
backtrack([],1, visited, N, M)