// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['5',
    'Aa enter',
    'a enter',
    'AAA enter',
    'aA enter',
    'A enter',]
const N = Number(input.shift())
const set = new Set()

for(let i=0; i<N; i++){
    const [name, act] = input[i].split(' ')
    if(act === 'enter'){
        set.add(name)
    }
    if(act === 'leave'){
        set.delete(name)
    }
}
console.log([...set].sort().reverse().join('\n'))