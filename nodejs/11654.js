const input = require('fs').readFileSync('/dev/stdin').toString()

console.log(input.charCodeAt(0))

process.exit()