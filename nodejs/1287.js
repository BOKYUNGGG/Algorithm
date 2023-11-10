class Stack {
    constructor(){
        this.array = new Array(1)
        this.numberOfItems = 0
    }  
    isEmpty(){
        return this.numberOfItems === 0
    }
    resize(capacity){
        let newArray = new Array(capacity)
        this.array.forEach((_,i)=>newArray[i])
    }
    push(item){
        if(this.numberOfItems === this.array.length){
            this.resize(2*this.array.length)
        }
        this.array[this.numberOfItems++] = item
    }
    pop(){
        const item = this.array[this.numberOfItems-1]
        this.array[this.numberOfItems-1] = null
        this.numberOfItems--
        if(
            this.numberOfItems > 0 &&
            this.numberOfItems == this.array.length){
                this.resize(this.array.length/2)
            }
        return item
    }
    howManyItems(){
        return this.numberOfItems
    }
}
// const string = require('fs').readFileSync('/dev/stdin').toString().trim().split('')
let string = '(10-10+10-10++10)'
const ops = new Stack()
const vals = new Stack()
let tempVals = []
for(char of string){
    console.log('char = ', char)
    console.log('ops = ',ops)
    console.log('vals = ',vals)
    console.log('tempVals = ',tempVals)
    console.log(' ')
    if(char === '('){   // do nothing
    }
    else if(char === '+') {
        vals.push(Number(tempVals.join('')))
        tempVals = []
        ops.push(char)
    }
    else if(char === '-') {
        vals.push(Number(tempVals.join('')))
        tempVals = []
        ops.push(char)
    }
    else if(char === '*') {
        vals.push(Number(tempVals.join('')))
        tempVals = []
        ops.push(char)
    }
    else if(char === '/') {
        vals.push(Number(tempVals.join('')))
        tempVals = []
        ops.push(char)
    }
    else if(char === ')'){   
        vals.push(Number(tempVals.join('')))
        tempVals = []
        const operation = ops.pop()
        if(operation === '+') vals.push(vals.pop() + vals.pop())
        else if(operation === '-') vals.push(-vals.pop() + vals.pop())
        else if(operation === '*') vals.push(vals.pop() * vals.pop())
        else if(operation === '/') vals.push(vals.pop() / vals.pop())
    }
    else {
        tempVals.push(char)
    }
}

console.log('=============================================')
console.log('ops = ',ops)
console.log('vals = ',vals)
console.log('tempVals = ',tempVals)
console.log(' ')
console.log('=============================================')

if(vals.howManyItems()-1 !== ops.howManyItems()){
    console.log('ROCK')
}
while(vals.howManyItems() !== 1){
    const operation = ops.pop()
    if(operation === '+') vals.push(vals.pop() + vals.pop())
    else if(operation === '-') vals.push(-vals.pop() + vals.pop())
    else if(operation === '*') vals.push(vals.pop() * vals.pop())
    else if(operation === '/') vals.push(vals.pop() / vals.pop())
    console.log('ops = ',ops)
    console.log('vals = ',vals)
    console.log(' ')
}