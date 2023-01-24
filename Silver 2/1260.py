from collections import deque

N, M, V = map(int, input().split())

graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)

for _ in range(M) :
    v1, v2 = map(int, input().split())
    graph[v1].append(v2)
    graph[v2].append(v1)

for g in graph :
    g.sort()

def dfs(graph, node, visited) :
    print(node, end=' ')
    visited[node] = True

    for i in graph[node] :
        if not visited[i] :
            dfs(graph, i, visited)


def bfs(graph, node, visited) :
    print(node, end=' ')
    visited[node] = True

    q = deque(graph[node])
    
    while q :
        v = q.popleft()
        if visited[v] == False :
            print(v, end=' ')
        
        visited[v] = True

        for i in graph[v] :
            if not visited[i] :
                q.append(i)


dfs(graph, V, visited)
visited = [False] * (N+1)
print()
bfs(graph, V, visited)
