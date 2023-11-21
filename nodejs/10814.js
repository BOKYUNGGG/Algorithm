//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['3',
    '21 Junkyu',
    '21 Dohyun',
    '20 Sunyoung',]
const N = input.shift()

const array = input.map(x=>x.split(' '))
array.sort((a,b)=>{
    if(a[0]===b[0]){
        return a
    }
    return Number(a[0]) - Number(b[0])
})
console.log(array.map(x=>x.join(' ')).join('\n'))