const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N,k] = input.shift().split(' ').map(Number)
const attendee = input.shift().split(' ').map(Number)

attendee.sort((a,b)=>b-a)
console.log(attendee[k-1])