# 바이러스
# 문제 분류 : dfs

# 입력 
# 컴퓨터의 수
# 짝지을 컴퓨터 쌍 수
# 연결되어 있는 컴퓨터 쌍

# 출력
# 바이러스에 걸리게 되는 컴퓨터의 수

count_of_node = int(input()) + 1
# make a graph
graph = [[] for _ in range(count_of_node)]

for _ in range(int(input())) :
    a,b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# make a visited list
visited = [False] * count_of_node

def dfs(graph, node, visited) :
    # visit
    visited[node] = True

    # 
    for i in graph[node] :
        if not visited[i] :
            dfs(graph, i, visited)

dfs(graph, 1, visited)


print(visited.count(True) - 1)
