// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>Number(x))
const input = [5,5,50]
function sum(array){
    return array.reduce((acc,val)=>acc+val)
}
let angles = new Set(input)

if(sum(input) !== 180){
    console.log('Error')
    process.exit()
}
else if(angles.size === 1){
    console.log('Equilateral')
}
else if(angles.size === 2){
    console.log('Isosceles')
}
else if(angles.size === 3){
    console.log('Scalene')
}
