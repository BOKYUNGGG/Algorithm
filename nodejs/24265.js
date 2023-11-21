const input = Number(require('fs').readFileSync('/dev/stdin').toString())
console.log((input-1)*input/2)
console.log(2)
// n = 10
// i = 1 
// j = 2 3 4 5 6 7 8 9 10(n-1)

// i=2
// j=3 4 5 6 7 8 9 10(n-2)

// i=3
// j=4 5 6 7 8 9 10(n-3)

// //...
// i=n-2
// j=n-1 n(2)

// i = n-1
// j = n(1)
