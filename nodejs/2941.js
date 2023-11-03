// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('')
const input = 'ddz=z='.split('')
const croatic = {
    [`c=`] : true,
    [`c-`] : true,
    [`dz=`] : true,
    [`d-`] : true,
    [`lj`] : true,
    [`nj`] : true,
    [`s=`] : true,
    [`z=`] : true,
}
let answer = 0
let i = 0

while(true){
    // escape while loop
    if(i>=input.length)  break
    console.log('i = ', i)

    // size 2
    let e = [input[i],input[i+1]].join('')
    if(croatic[e]){
        console.log(e, '\n')
        answer++
        i += 2
        continue
    }
    // size 3
    e = [e,input[i+2]].join('')
    if(croatic[e]){
        console.log(e, '\n')

        i += 3
        answer++
        continue
    }
    // size 1
    e = input[i]
    if(e === '=' || e === '-') {
        console.log(e, '\n')
        i++
        continue
    }else{
        console.log(e, '\n')
        i++
        answer++
        continue
    }
}
console.log(answer)