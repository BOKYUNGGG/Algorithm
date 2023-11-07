class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedListQueue {
    /**
     * create an empty queue
     */
    constructor(){
        this.first = null
        this.last = null
    }
    /**
     * insert a new data onto queue
     */
    enqueue(data){
        const last = new Node(data)
        if(this.isEmpty()){
            this.first = last
            this.last = last
        }else{
            this.last.next = last
            this.last = last
        }
    }
    /**
     * remove and return the item least recently added
     */
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const data = this.first
        this.first = this.first.next
        if(this.first===null){
            this.last = null
        }
        return data
    }
    /**
     * is the queue empty?
     */
    isEmpty(){
        return this.first === null
    }
    /**
     * return the number of items in queue
     */
    size(){

    }
}
const queue = new LinkedListQueue()
queue.enqueue('I')
queue.enqueue('am')
queue.enqueue('hero')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

