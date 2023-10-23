class QuickFindUF{
    constructor(N){
        this.id = Array.from({length : N}, (_,i)=>i)

    }
    connected(p, q){
        return this.id[p] === this.id[q]
    }
 
    /**
     * To merge components containing p and q, change all entries whose id equals id[p] to id[q].
     * - component. which is a set of connected objects.
     */
    union(p, q){
        const pid = this.id[p]
        const qid = this.id[q]
        for(let i=0;i<this.id.length;i++){
            if(this.id[i] === pid){
                this.id[i] = qid
            }
        }
    }
}

const numberOfObject = 10
const seriesOfPairs = ['4 3', '3 8', '6 5', '9 4', '2 1', '8 9', '5 0', '7 2', '6 1', '1 0', '6 7']

const quickFindUF = new QuickFindUF(numberOfObject)
for(pair of seriesOfPairs){
    const [p,q] = pair.split(' ').map(x=>Number(x))
    quickFindUF.union(p,q)
}
console.log(quickFindUF.id)