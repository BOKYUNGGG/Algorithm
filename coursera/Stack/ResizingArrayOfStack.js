class ResizingArrayOfStack {
    constructor(){
        this.s = new Array(1)
    }
    
    resize(capacity){
        let newS = new Array(capacity)
        for(let i=0;i<this.s.length;i++){
            newS[i] = this.s[i]
        }
        this.s = newS
    }
}