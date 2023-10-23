// size
// path compression
class WeightedQuickUnionUF{
    constructor(N){
        this.id = Array.from({length : N}, (_,i)=>i)
        this.size = Array.from({length : N}, ()=>1)
    }
    /**
     * The difference between other root method and weighted-quick-union's root method is the word "path compression".
     */
    root(i){
        while(i != this.id[i]){
            this.id[i] = this.id[this.id[i]] // path compression
            i = this.id[i]
        }
        return i
    }
    connected(p, q){
        return this.root(p) == this.root(q)
    }
    /**
     * Link root of smaller tree to root of larger tree.
     * Update the this.size array.
     */
    union(p, q){
        const i = this.root(p)
        const j = this.root(q)
        if(i == j) return
        if(this.size[i] < this.size[j]){
            this.id[i] = j
            this.size[j] += this.size[i]
        }
        else{
            this.id[j] = i
            this.size[i] += this.size[j]
        }
    }
}
const numberOfObject = 10
const seriesOfPairs = ['4 3', '3 8', '6 5', '9 4', '2 1', '8 9', '5 0', '7 2', '6 1', '1 0', '6 7']

const weightedQuickUnionUF = new WeightedQuickUnionUF(numberOfObject)
for(pair of seriesOfPairs){
    const [p,q] = pair.split(' ').map(x=>Number(x))
    weightedQuickUnionUF.union(p,q)
}
console.log(weightedQuickUnionUF.id)