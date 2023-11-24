// 짝수 N을 두 소수의 합으로 나타내는 표현
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [1,4]
const T = input[0]

// 가장 큰 수까지 소수 찾기
const max = Math.max(...input.slice(1))
const numbers = getPrimeNumbers(max)

for(let i=0;i<T;i++){
    const N = input[i+1]

    let goldbachCount = 0
    if(N == 4) goldbachCount++
    
    for(let j=3;j<=N/2;j+=2){
        // j가 소수이면서
        // N-j가 소수라면 카운트 증가
        if(numbers[j] && numbers[N-j]) goldbachCount++
    }
    console.log(goldbachCount)
}
function getPrimeNumbers(limit){
    // 2부터 limit까지의 모든 수를 포함하는 배열
    const isPrime = new Array(limit+1).fill(true)
    // 0과 1을 소수에서 미리 제외
    isPrime[0] = isPrime[1] = false
    
    for(let i=2;i*i<=limit;i++){
        // i가 소수인 경우, i의 배수를 모두 소수가 아닌 것으로 표시
        if(isPrime[i]){
            for(let j=i*i; j<=limit; j+=i){
                isPrime[j] = false
            }
        }
    }
    return isPrime
}