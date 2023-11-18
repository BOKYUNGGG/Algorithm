class InsertionSort {
    sort(array){
        const len = array.length
        for(let  i=0;i<len;i++){
            
            for(let j=i; 0<j; j--){
                // i는 정렬시킬 데이터의 인덱스
                // j는 정렬된 부분의 인덱스

                // 만약 j가 i보다 더 작으면 교환
                if(this.compare(array[j],array[j-1])){
                    this.exchange(array, j, j-1)
                }
                // 같거나 j가 더 크다면 정렬된 상태이므로 건너뛰기
                else {
                    break
                }
            }
        }

    }
    compare(a,b){
        return a<b
    }
    exchange(array, a, b){
        [array[a], array[b]] = [array[b], array[a]]
    }
}
const insertionSort = new InsertionSort()
let sortexample = 'sortexample'.split('')
console.log(sortexample)
insertionSort.sort(sortexample)
console.log(sortexample)