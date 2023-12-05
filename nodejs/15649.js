const [N, M] = [4, 2]

// 1,2,3,4
const arr = Array.from({length : N}, (_,index)=>index+1)
// false, false, false, false
const visited = Array(N).fill(false)




const dfs = (array, prefix, visited) =>{
    console.log('=======================')
    console.log('prefix : ', prefix)
    console.log('visited : ', visited)

    const result = []
    if(prefix.length === M){
        result.push(prefix)
        prefix.pop()
        return
    }

    for(let i=0;i<array.length;i++){
        // 이미 방문한 곳이라면 다음 요소로 
        if(visited[i]) continue
        const newVisited = visited.map((element, index)=>index === i ? true : element)
    
        prefix.push(array[i])
        dfs(array, prefix, newVisited)
    }


    return result
}
const a = dfs(arr, [], visited)
console.log(a)