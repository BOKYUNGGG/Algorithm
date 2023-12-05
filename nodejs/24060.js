// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5 13
4 5 1 3 2`.split('\n')
const [length, K] = input.shift().split(' ').map(Number)
const arr = input[0].split(' ').map(Number)

let count = 1
let result
function mergeSort(array, p, r){
    if(p<r){
        const q = Math.floor((p+r) / 2)
        mergeSort(array, p, q)
        mergeSort(array, q+1, r)
        merge(array, p, q, r)
    }
}


function merge(array, p, q, r){
    let i = p
    let j = q + 1
    let t = 1

    const temp = []
    // 정렬한 뒤, temp 배열에 임시 저장
    while(i <= q && j <= r){
        if(array[i] <= array[j]){
            if(count === K) result = array[i]
            // temp.push(array[i])
            temp[t] = array[i]
            t++
            i++
            count++
        }
        else {
            if(count === K) result = array[j]
            // temp.push(array[j])
            temp[t] = array[j]
            t++
            j++
            count++
        }
    }
    while(i <= q){
        if(count === K) result = array[i]
        // temp.push(array[i])
        temp[t] = array[i]
        t++
        i++
        count++
    }
    while(j <= r){
        if(count === K) result = array[j]
        // temp.push(array[j])
        temp[t] = array[j]
        t++
        j++
        count++
    }
    i = p
    t = 1
    // console.log(temp)
    while(i <= r){
        array[i] = temp[t]
        i++
        t++
    }
}
mergeSort(arr,0,length-1)
console.log(count-1 < K ? -1 : result)