// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['7 7',
    '8',
    '10']
const [Fn의기울기, Fny절편] = input.shift().split(' ').map(Number)
const Gn의기울기 = Number(input.shift())
const N의초항 = Number(input.shift())
const F함수의좌측끝높이 = Fn의기울기*N의초항 + Fny절편
const G함수의좌측끝높이 = Gn의기울기*N의초항

if(F함수의좌측끝높이 <= G함수의좌측끝높이 && Fn의기울기 <= Gn의기울기) console.log('1')
else console.log('0')