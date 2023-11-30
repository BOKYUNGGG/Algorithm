// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const input = 6

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Queue {
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
        }else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()) return -1
        const removed = this.front.data
        this.front = this.front.next
        this.size--
        if(this.isEmpty()) this.rear = null
        return removed
    }
    isEmpty(){
        return this.size === 0
    }
}
const queue = new Queue()
for(let i=1;i<=input;i++){
    queue.enqueue(i)
}
while(true){
    if(queue.size === 1){
        console.log(queue.front.data)
        break
    }
    // remove front
    queue.dequeue()

    // move the front
    const moved = queue.dequeue()
    queue.enqueue(moved)
}