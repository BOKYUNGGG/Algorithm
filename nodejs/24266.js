const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim()
let number = BigInt(input)
console.log(`${number * number* number}`)
console.log(3)