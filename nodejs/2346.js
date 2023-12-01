// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// 5
// 풍선 i   0   1   2   3   4 
//  0      3_  2   1  -3  -1
//  1      2   1  -3_ -1  
//  2      2   1  -1_
//  3      2   1_
//  4      2_


class Node {
    constructor(data){
        this.data = data
        this.index = null
        this.head = null
        this.tail = null
    }
}

class Balloons {
    constructor(){
        this.size = 0
        this.front = null
        this.rear = null
    }
    push(ballon, index){
        const newNode = new Node(ballon)
        newNode.index = index
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
            this.now = newNode
            newNode.head = newNode
            newNode.tail = newNode
        }
        else {
            newNode.head = this.rear
            newNode.tail = this.front
            this.rear = newNode
        }
        this.size++
    }
    remove(balloon){
        let removed = balloon
        removed.head.tail = removed.tail
        removed.tail.head = removed.head
        removed = null
        this.size--
    }
    move(step){
        let count = 0
        console.log('from : ', this.now.index)
        while(true){
            if(count === step) break
            if(step < 0){
                this.left()
                count--
            }
            else{
                this.right()
                count++
            }
        }
        console.log('to : ', this.now.index)
    }
    left(){
        this.now = this.now.head
    }
    right(){
        this.now = this.now.tail
    }
    isEmpty(){
        return this.size === 0 
    }
}


const input = `5
3 2 1 -3 -1`.split('\n')
const N = Number(input[0])
const temp = input[1].split(' ').map(Number)
const balloons = new Balloons()
for(let i=0; i<N; i++){
    balloons.push(temp[i], i)
} 
const results = [0]

for(let i=0;i<N;i++){
    const result = balloons.now.index + 1
    const step = balloons.now.data
    balloons.move(step)
    balloons.remove(balloons.now)
    
    results.push(result)
}
balloons.remove(balloons.now)
console.log(balloons)
console.log(results.join(' '))

function navigate(object, targetKey, steps){
    const visited = new Set()
    function dfs(currentObj, currentPath, currentSteps){
        if(currentSteps === steps){
            return currentObj
        }
        for(const [key, value] of Object.entries(currentObj)){
            const newPath = [...currentPath, key]
            if(!visited.has(value)){
                dfs(value, newPath, currentSteps + 1)
            }
        }
    } // dfs
    dfs(object, [], 0)
}