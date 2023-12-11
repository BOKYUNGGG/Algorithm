const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


const input = []
rl.on('line', (line)=>{
    input.push(line)
}).on('close', ()=>{
    weightedQuickUnionUF(input)
})

function weightedQuickUnionUF(input){
    const [N,M] = input[0].split(' ').map(Number)

    const id = Array.from({length : N}, (_,i)=>i)
    const size = Array.from({length : N}, ()=>1)
    const result = []

    function root(i){
        while(i != id[i]){
            id[i] = id[id[i]]
            i = id[i]
        }
        return i
    }
    function connected(p,q){
        return root(p) === root(q)
    }

    function union(p,q){
        const i = root(p)
        const j = root(q)
        if(i == j) return
        if(size[i] < size[j]){
            id[i] = j
            size[j] += size[i]
        }
        else{
            id[j] = i
            size[i] += size[j]
        }
    }
    
    for(let i=0;i<M;i++){
        const [operation, a, b] = input[i+1].split(' ').map(Number)
        // union
        if(operation === 0){
            union(a,b)
        }
        // connected
        else{
            if(connected(a,b)) result.push('yes')
            else result.push('no')
        }
    }
    console.log(result.join('\n'))
}
