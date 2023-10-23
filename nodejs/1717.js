// const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const inputs = require('fs').readFileSync('input.txt').toString().split('\n')

class UF {
    constructor(N){
        this.id = Array.from({length : N}, (_,i)=>i)
        this.size = Array.from({length : N}, ()=>1)
    }
    root(i){
        while(this.id[i] != i){
            this.id[i] = this.id[this.id[i]]
            i = this.id[i]
        }
        return i
    }
    connected(p,q){
        return this.root(p) == this.root(q)
    }
    union(p,q){
        const i = this.root(p)
        const j = this.root(q)
        if(i==j) return
        if(this.size[i] < this.size[j]){
            this.id[i] = this.id[j]
            this.size[j] += this.id[i]
        }
        else{
            this.id[j] = this.id[i]
            this.size[i] += this.id[j]
        }
    }
}

const [N,M] = inputs[0].split(' ').map(x=>Number(x))
const uf = new UF(N)

for(let i=0; i<M; i++){
    const [ops, p, q] = inputs[i+1].split(' ').map(x=>Number(x))
    // union operation
    if(ops === 0){
        uf.union(p,q)
    }
    // is connected operation
    if(ops === 1){
        if(uf.connected(p,q)){
            console.log('YES')
        }
        else{
            console.log('NO')
        }
    }
}


