const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.on('line', (input)=>{
    
})
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