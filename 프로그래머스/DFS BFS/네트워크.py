def dfs(graph, v, visited) :
    visited[v] = True
    
    for i in graph[v] : 
        if not visited[i] :
            dfs(graph, i, visited)

def getGraph(computers) : 
    graph = [[] for _ in range(len(computers))]

    # u : 시작점
    # v : 끝점
    for u in range(len(computers)) :
        for v in range(len(computers[u])) :
            if u != v and computers[u][v] == 1 :
                graph[u].append(v)
                
    return graph
    
def solution(n, computers):
    answer = 0
    
    graph = getGraph(computers)
    visited = [False] * len(computers)
    
    for i in range(len(computers)) :
        if not visited[i] :
            dfs(graph, i, visited)
            answer += 1
    
    return answer