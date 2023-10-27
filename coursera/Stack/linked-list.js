class LinkedListStack {
    constructor(){
        this.first = null
    }
    Node(data){
        return {
            data,
            next : null // `next` is a reference of next node
        }
    }
    push(data){
        const oldFirst = this.first
        this.first = this.Node(data)
        this.next = oldFirst
    }
    pop(){
        const data = this.first
        this.first = this.first.next
        return data
    }
    isEmpty(){
        return this.first === null
    }
}

let stack = new LinkedListStack()
stack.push('hello')
stack.push('world')
console.log(stack.pop())