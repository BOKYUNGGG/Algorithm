class InsertionSort{
    constructor(){

    }
    sort(array){
        const N = array.length
        for(let i = 0; i < N; i++){
            for(let j = i; i > 0; j--){
                // if(j===0) break
                if(this.less(array[j], array[j-1])){
                    this.exchange(array, j, j-1)
                }
                else break
            }
        }
    }
    /**
     * When a is smaller than b, return true
     */
    less(a,b){

        return a < b
    }
    /**
     * Exchange two array items each other.
     */
    exchange(array, i, j){
        [[array[i]],[array[j]]] = [[array[j]],[array[i]]]
    }
}
const sample = [7,10,5,3,8,4,2,9,6]
const insertionSort = new InsertionSort()
insertionSort.sort(sample)
console.log(sample)