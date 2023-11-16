// const N = Number(require('fs').readFileSync('/dev/stdin').toString())
const N = 11
const tree = {
    // 15 : [10,12]
    // 10 : [10,12]
}
let result = []
// 부모를 등록하는 함수
function enrollParent(count, number){
    // 부모가 될 수 없는 숫자 : 0,1,2,4
    if( number==0 || number==1 || number==2 || number==4) return
    // root 부모가 되는 숫자 : 3,5
    if( number==3 || number==5) {
        console.log(count)
        process.exit()
        return
    }
    tree[number] = [number-5,number-3]
    if(tree[number][0]){
        enrollParent(count+1, tree[number][0])
    }
    if(tree[number][1]){
        enrollParent(count+1, tree[number][1])
    }
}
enrollParent(1,N)
console.log(-1)