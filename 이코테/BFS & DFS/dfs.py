# DFS -> Stack
# BFS -> Queue


# DFS
# 1.   탐색 시작 노드를 스택에 삽입하고 방문 처리를 합니다.
# 2-1. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문처리합니다.   
# 2-2. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냅니다.
# 3.   더 이상 2번의 과정을 수행할 수 없을 때까지 반복합니다.

def dfs(graph, node, visited) :

    visited[node] = True
    print(node, end=' ')

    for i in graph[node] :
        
        if not visited[i] :
            dfs(graph, i, visited)

graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [False] * 9

dfs(graph, 1, visited)