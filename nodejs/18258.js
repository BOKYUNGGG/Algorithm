// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split('\n')


// 노드 정의
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
  
// 큐 구현
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
  
    // 큐에 요소 추가
    enqueue(element) {
        const newNode = new Node(element);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
  
    // 큐에서 첫 번째 요소 제거하고 반환
    dequeue() {
        if (this.isEmpty()) {
            return -1
        }
        const removedItem = this.front.data;
        this.front = this.front.next;
        this.size--;
  
        if (this.isEmpty()) {
            this.rear = null;
        }
  
        return removedItem;
    }
  
    // 큐의 첫 번째 요소 반환 (제거하지 않음)
    getFront() {
        if (this.isEmpty()) {
            return -1
        }
        return this.front.data;
    }
    getBack(){
        if (this.isEmpty()) {
            return -1
        } 
        return this.rear.data
    }
    // 큐가 비어있는지 여부 확인
    isEmpty() {
        return this.size === 0 ? 1 : 0
    }
  
    // 큐의 크기 반환
    getSize() {
        return this.size;
    }
}


const N = Number(input[0])
const queue = new Queue()

const result = []
for(let i=1;i<=N;i++){
    const [query, number] = input[i].split(' ')
    if(query === 'push') queue.enqueue(number)
    else if(query === 'pop') result.push(queue.dequeue())
    else if(query === 'size') result.push(queue.getSize())
    else if(query === 'empty') result.push(queue.isEmpty())
    else if(query === 'front') result.push(queue.getFront())
    else if(query === 'back') result.push(queue.getBack())
}
console.log(result.join('\n'))