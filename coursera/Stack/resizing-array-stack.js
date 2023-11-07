class ResizingArrayStack {
    constructor(){
        this.array = new Array(1)
        this.numberOfItems = 0
    }  
    resize(capacity){
        let newArray = new Array(capacity)
        this.array.forEach((_,i)=>newArray[i])
    }
    push(item){
        if(this.numberOfItems === this.array.length){
            this.resize(2*this.array.length)
        }
        this.array[this.numberOfItems++] = item
    }
    pop(){
        const item = this.array[this.numberOfItems-1]
        this.array[this.numberOfItems-1] = null
        this.numberOfItems--
        if(
            this.numberOfItems > 0 &&
            this.numberOfItems == this.array.length){
                this.resize(this.array.length/2)
            }
        return item
    }
    print(){
        console.log(this.array)
    }
}
const stack = new ResizingArrayStack()
stack.push('to')
stack.push('be')
stack.push('or')
stack.push('not')
stack.push('to')
console.log(stack.pop())
stack.push('be')
console.log(stack.pop())
console.log(stack.pop())
stack.push('that')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.push('is')
stack.print()