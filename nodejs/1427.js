//const N = '500613009'
const N = require('fs').readFileSync('/dev/stdin').toString()
const sorted = N.split('').sort((a,b)=>b-a).join('')
console.log(sorted)