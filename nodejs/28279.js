//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = `3
6
8
6`.split('\n')

class Node {
    constructor(data){
        this.data = data
        this.head = null
        this.tail = null
    }
}
class Deck {
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    // deck 앞에 데이터 넣기
    query1(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
        } else {
            const oldNode = this.front
            oldNode.head = newNode
            newNode.tail = oldNode
            this.front = newNode
        }
        this.size++
    }
    // deck 뒤에 데이터 넣기
    query2(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
        }
        else{
            const oldNode = this.rear
            oldNode.tail = newNode
            newNode.head = oldNode
            this.rear = newNode 
        }
        this.size++
    }
    // deck 앞에 데이터 빼기
    query3(){
        if(this.isEmpty()) return -1
        const removed = this.front.data
        if(this.size === 1){
            this.front = null
            this.rear = null
        }else {
            this.front = this.front.tail
            this.front.head = null
        }
        this.size--
        return removed
    }
    // deck 뒤에 데이터 빼기
    query4(){
        if(this.isEmpty()) return -1
        const removed = this.rear.data
        if(this.size === 1){
            this.front = null
            this.rear = null
        } else {
            this.rear = this.rear.head
            this.rear.tail = null
        }
        this.size--
        return removed
    }
    isEmpty(){
        return this.size === 0
    }
}

const N = Number(input[0])
const deck = new Deck()
const result = []
for(let i=1; i<=N;i++){
    const [query, number] = input[i].split(' ').map(Number)
    if(query === 1){
        deck.query1(number)
    }
    else if(query === 2){
        deck.query2(number)
    }
    else if(query === 3){
        result.push(deck.query3())
    }
    else if(query === 4){
        result.push(deck.query4())
    }
    else if(query === 5){
        result.push(deck.size)
    }
    else if(query === 6){
        if(deck.isEmpty()) result.push(1)
        else result.push(0)
    }
    else if(query === 7){
        if(deck.isEmpty()) result.push(-1)
        else {
            result.push(deck.front.data)
        }
    }
    else if(query === 8){
        if(deck.isEmpty()) result.push(-1)
        else {
            result.push(deck.rear.data)
        }
    }
}

console.log(result.join('\n'))