// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`.split('\n')
const T = Number(input[0])

let count = 0
function recursion(string, l, r){
    count++
    if(l>=r) return 1
    else if(string[l] != string[r]) return 0
    else return recursion(string, l+1, r-1)
}

function isPalindrome(string){
    return recursion(string, 0, string.length - 1)
}

const result = []
for(let i=1;i<=T;i++){
    const word = input[i]
    result.push([isPalindrome(word), count].join(' '))
    count = 0
}
console.log(result.join('\n'))