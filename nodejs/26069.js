// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `12
bnb2011 chansol
chansol chogahui05
chogahui05 jthis
jthis ChongChong
jthis jyheo98
jyheo98 lms0806
lms0806 pichulia
pichulia pjshwa
pjshwa r4pidstart
r4pidstart swoon
swoon tony9402
tony9402 bnb2011`.split('\n')
const N = Number(input[0])
const library = {
    ChongChong : true
}
for(let i=1;i<=N;i++){
    const [A, B] = input[i].split(' ')
    if(library[A] || library[B]){
        library[A] = true
        library[B] = true
    }
    

}

console.log(Object.keys(library).length)