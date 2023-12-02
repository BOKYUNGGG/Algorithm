//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `13 5
appearance
append
attendance
swim
swift
swift
swift
mouse
wallet
mouse
absent
artist
action`.split('\n')

// N : 지문에 나오는 단어의 개수
// M : 외울 단어의 최소 길이
const [N, M] = input[0].split(' ').map(Number)
const dictionary = {

}
for(let i=1; i<=N; i++){
    const candidate = input[i]
    const length = candidate.length
    // 짧은 단어 가려내기
    if(length < M) continue

    // 처음보는 단어 등록하기
    if(!dictionary[candidate]){
        dictionary[candidate] = {
            count : 1,
            len : length
        }
    } else {
        dictionary[candidate].count++
    }
}


const result = Object.entries(dictionary).sort((a,b)=>{
    // priority 2nd
    // order discending on length
    if(a[1].count === b[1].count){
        // priority 3rd
        // order dictionary
        if(a[1].len === b[1].len){
            if(a[0] < b[0]) return -1
            if(b[0] < 1[0]) return 1
            return 0
        }

        return b[1].len - a[1].len
    }
    // priority 1st
    // order discending on count
    return b[1].count - a[1].count
})
console.log(result)
console.log(result.map((element)=>element[0]).join('\n'))