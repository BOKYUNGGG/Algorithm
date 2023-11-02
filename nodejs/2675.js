const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const T = Number(input.shift())

for(let i=0;i<T;i++){
    const [R, S] = input[i].split(' ')
    let answer = []
    for(let j=0; j<S.length; j++){
        answer.push(S[j].repeat(R))
    }
    console.log(answer.join(''))
}