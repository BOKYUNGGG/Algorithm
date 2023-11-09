// const N = Number(require('fs').readFileSync('/dev/stdin').toString())
const N = 1
let A = [3]

for(let i=0;i<N-1;i++){
    A.push(A[i]*2 - 1)
}
console.log(A.pop()**2)


// 한 변에 들어가는 점의 개수 = 3, 5, 9, 17, 33
// a(N) = a(N-1) * 2 - 1

// 모든 점의 개수 
// S(N) = a(N) * a(N)
