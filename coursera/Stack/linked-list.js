class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    push(data){
        const newNode = new Node(data)
        newNode.next = this.first
        this.first = newNode
        this.size++
    }
    pop(){
        if(this.isEmpty()) return
        const poppedNode = this.first
        this.first = this.first.next
        this.size--
        return poppedNode
    }
}
const stack = new Stack()
stack.push('Hello')
stack.push('World')
stack.push('!')

console.log(JSON.stringify(stack.pop(), null, 2))
console.log(JSON.stringify(stack.pop(), null, 2))
console.log(JSON.stringify(stack.pop(), null, 2))