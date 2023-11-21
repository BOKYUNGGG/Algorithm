const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(a => Number(a))
const angleSum = input.reduce((acc, cur) => acc+cur, 0)

if(angleSum === 180) {
    // 같은 각의 갯수를 검사하며, 세 각이 같은 경우는 길이가 2, 두 각이 같은 경우는 1, 모두 다른 경우는 0이 출력됨
    const duplicatedAngle = input.filter((angle, angleIdx) => input.indexOf(angle) !== angleIdx).length
    
    if(duplicatedAngle === 2) {
        console.log('Equilateral')
    } else if(duplicatedAngle === 1) {
        console.log("Isosceles")
    } else {
        console.log("Scalene")
    }
} else {
    console.log('Error')
}