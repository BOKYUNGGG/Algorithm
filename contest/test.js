// 00
// 01
// 10
// 11

console.log(3^3)

// 3을 없애야해
// XOR 연산을 통해서 3을 지우려면?
// 3이랑 1,2,3을 XOR연산
// 항이 2개 

console.log('==========')
console.log(0^0) // 0
console.log(0^1) // 1
console.log(0^2) // 2
console.log(0^3) // 3
console.log('==========')
console.log(1^0) // 1
console.log(1^1) // 0
console.log(1^2) // 3
console.log(1^3) // 2
console.log('==========')
console.log(2^0) // 2
console.log(2^1) // 3
console.log(2^2) // 0
console.log(2^3) // 1
console.log('==========')
console.log(3^0) // 3 
console.log(3^1) // 2 // (3,1) (3,2) (3,3)
console.log(3^2) // 1
console.log(3^3) // 0
console.log('==========')
console.log(3^0^0) // 3
console.log(3^0^1) // 2 // (3,0,1) (3,0,2) (3,0,3)
console.log(3^0^2) // 1
console.log(3^0^3) // 0
console.log('==========')
console.log(3^0^0^0) // 3
console.log(3^0^0^1) // 2 // (3,0,0,1) (3,0,0,2) (3,0,0,3)
console.log(3^0^0^2) // 1
console.log(3^0^0^3) // 0
console.log('==========')
console.log(0^0^1^3)
console.log(0^0^3^1)
console.log(0^1^0^3)

// 3이랑 (1,2,3) 묶는다