class Queue {
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = -1
    }
    enqueue(data){
        this.rear++
        this.queue[this.rear] = data

        // 큐가 가득 찼을 때
        if(this.rear === this.queue.length - 1){
            // resize the size twice
            this.resize(this.queue.length * 2)
        }
    }
    dequeue(){
        if(this.rear < this.front){
            return null
        }
        const data = this.queue[this.front]
        this.front++

        // 큐가 쓸데 없이 클 때
        if(this.size() <= this.queue.length / 4){
            this.resize(this.queue.length / 2)
        }

        return data
    }
    resize(capacity){
        const newQueue = Array(capacity)
        for(let i=this.front, j=0; i<= this.rear; i++,j++){
            newQueue[j] = this.queue[i]
        }

        this.queue = newQueue
        this.rear = this.rear - this.front
        this.front = 0
    }
    size(){
        return this.rear - this.front + 1
    }
    isEmpty(){
        return this.rear < this.front 
    }
}