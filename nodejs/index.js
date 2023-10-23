const readline = require('readline')
const {promisify} = require('util')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const question = promisify(rl.question).bind(rl)

async function main(){
    const input = await question('')
    const [N, M] = input.split(' ').map(x=>Number(x))

    const uf = new UF(N)
    let answer = []
    for(let i=0; i<M; i++){
        const line = await question('')
        const [ops, p, q] = line.split(' ').map(x=>Number(x))
        // union operation
        if(ops === 0){
            uf.union(p,q)
        }
        // is connected operation
        if(ops === 1){
            if(uf.connected(p,q)){
                answer.push('YES')
            }
            else{
                answer.push('NO')
            }
        }
    }
    console.log(answer.join('\n'))
    rl.close()
}

class UF {
    constructor(N){
        this.id = Array.from({length : N}, (_,i)=>i)
        this.size = Array.from({length : N}, ()=>1)
    }
    root(i){
        while(i != this.id[i]){
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
main()