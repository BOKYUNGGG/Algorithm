// const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const inputs = ['3','fdgdsgfsa','sdfsdf','dfgdf']
const N = Number(inputs.shift())

for(let i=0;i<N;i++){
    const string = inputs[i]
    const head = string.slice(1)
    const tail = string.slice(-1)
    console.log(head, tail)
}

process.exit()