// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input =['5',
    '0 4',
    '1 2',
    '1 -1',
    '2 2',
    '3 3',
]
const N = Number(input.shift())
let array = input.map(x=>x.split(' ').map(Number))
array.sort((a,b)=>{
    if(a[1] === b[1]){
        return a[0] - b[0]
    }
    return a[1] - b[1]

})

console.log(array.map(x=>x.join(' ')).join('\n'))