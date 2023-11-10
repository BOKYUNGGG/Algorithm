// 1. 첫 번째 숫자가 두 번째 숫자의 약수 factor
// 2. 첫 번째 숫자가 두 번째 숫자의 배수 multiple
// 3. 첫 번째 숫자가 두 번째 숫자의 약수, 배수 둘 다 아니라면 neither


//const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = ['8 16', '32 4', '17 5', '0 0']
while(true){
    const [A,B] = input.shift().split(' ').map(x=>Number(x))
    let result = 'neither'
    // 종료
    if(A === 0 && B === 0) break
    if(A%B === 0) result = 'multiple'
    if(B%A === 0) result = 'factor'
    console.log(result)
}