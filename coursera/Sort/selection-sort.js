class SelectionSort{
    sort(array){
        const LENGTH = array.length

        for(let i=0; i<LENGTH; i++){
            const slicedArray = array.slice(i+1)
            const minValue = Math.min(...slicedArray)
            const minIndex = slicedArray.indexOf(minValue)

            if(this.isLess(array[i], minValue)){
                console.log(`exchagne ${i},${minIndex+i+1}`)
                this.exchange(array, i, minIndex+i+1)
                console.log(array)
            }
        }
    }
    /**
     * When b is smaller than a, return true
     */
    isLess(a,b){
        return b < a
    }
    /**
     * exchange ith item and jth item of array
     */
    exchange(array,i,j){
        [array[i], array[j]] = [array[j], array[i]]
    }
}

const sample = [7,10,5,3,8,4,2,9,6]
const selectionSort = new SelectionSort()
console.log(sample)
selectionSort.sort(sample)
console.log(sample)