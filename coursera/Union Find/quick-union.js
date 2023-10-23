// Find. Check if p and q have the same root.
class QuickUnionUF{
    constructor(N){
        this.id = Array.from({length : N}, (_,i)=>i)
    }
    root(i){
        while(i != this.id[i]){
            i = this.id[i]
        }
        return i
    }
    connected(p, q){
        return this.root(p) === this.root(q)
    }
    /**
     * To merge components containing p and q, set the id of p's root to the id of q's root.
     * The difference between quick-find's union method and quick-union's union method is the word "root".
     */
    union(p, q){
        const i = this.root(p)
        const j = this.root(q)
        this.id[i] = j
    }
}

const numberOfObject = 10
const seriesOfPairs = ['4 3', '3 8', '6 5', '9 4', '2 1', '8 9', '5 0', '7 2', '6 1', '1 0', '6 7']

const quickUnionUF = new QuickUnionUF(numberOfObject)
for(pair of seriesOfPairs){
    const [p,q] = pair.split(' ').map(x=>Number(x))
    quickUnionUF.union(p, q)
}
console.log(quickUnionUF.id)