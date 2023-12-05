class Graph {
  constructor(){
    this.vertices = []
    this.adjList = new Map()
  }
  addVertex(vertex){
    this.vertices.push(vertex)
    this.adjList.set(vertex, [])
  }
  addEdge(v,w){
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }
  dfs(startVertex, visited = { }){
    visited[startVertex] = true

    console.log(startVertex)

    const neighbors = this.adjList.get(startVertex)

    for(const neighbor of neighbors){
      if(!visited[neighbor]){
        this.dfs(neighbor, visited)
      }
    }
  }
}

const graph = new Graph()
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(const vertex of vertices){
  graph.addVertex(vertex)
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('C', 'G');
graph.addEdge('E', 'H');
graph.addEdge('E', 'I');
console.log('DFS 결과')
graph.dfs('A')