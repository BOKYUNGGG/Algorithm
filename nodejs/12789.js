class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor(){
        this.first = null
    }
    push(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.first = newNode
        }else{
            newNode.next = this.first
            this.first = newNode
        }
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const data = this.first.data
        this.first = this.first.next
        return data
    }
    isEmpty(){
        return this.first === null
    }
    getFirstData(){
        if(this.first) return this.first.data
        return null
    }
}

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `5
1 3 4 5 2`.split('\n')
const N = Number(input[0])


let order = 1
const array = input[1].split(' ').map(Number)
const stack = new Stack()
while(true){
    console.log('==============================')
    console.log('차례 : ', order)
    console.log('원래 줄 : ', array)
    console.log('옆 줄 : ', stack)

    if(array.length === 0 && stack.isEmpty() && order === N+1) {
        console.log('Nice')
        break
    }
    else if(array.length === 0 && stack.isEmpty() && order !== N+1) {
        console.log('Sad')
        break
    }
    
    if(order === array[0]){
        array.shift()
        order++
    } else if(order === stack.getFirstData()) {
        stack.pop()
        order++
    } else {
        stack.push(array.shift())
    }
}
