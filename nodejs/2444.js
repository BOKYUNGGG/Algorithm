// N-i 공백 2*i-1 별표
// i) N = 5
//    *         4공백 1별
//   ***        3공백 3별
//  *****       2공백 5별
// *******      1공백 7별
//*********     0공백 9별
// *******
//  *****
//   ***
//    *
const N = Number(require('fs').readFileSync('/dev/stdin').toString())

for(let i=1; i<N;i++){
    const blank = ' '.repeat(N-i)
    const star = '*'.repeat(2*i -1)
    console.log([blank, star].join(''))
}

console.log('*'.repeat(2*N-1))

for(let j=N-1;0<j;j--){
    const blank = ' '.repeat(N-j)
    const star = '*'.repeat(2*j -1)
    console.log([blank, star].join(''))
}