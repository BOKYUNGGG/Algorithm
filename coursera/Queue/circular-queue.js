class Queue{
    constructor(capacity){
        this.capacity = capacity
        this.queue = Array(capacity)
        this.front = -1
        this.rear = -1
    }
    isFull(){
        return (this.rear +1) % this.capacity === this.front
    }
    isEmpty(){
        return this.front === -1
    }
    enqueue(data){
        if(this.isFull()){
            console.error('Queue is Full. Cannot enqueue.')
            return
        }
        if(this.isEmpty()){
            this.front = 0
        }
        this.rear = (this.rear + 1) % this.capacity
        this.queue[this.rear] = data
    }
    dequeue(){
        if(this.isEmpty()){
            console.error('Queue is empty. Cannot dequeue.')
            return null
        }
        const data = this.queue[this.front]

        if(this.front === this.rear){
            this.front = -1
            this.rear = -1
        } else {
            this.front = (this.front + 1) % this.capacity
        }
        return data
    }
}