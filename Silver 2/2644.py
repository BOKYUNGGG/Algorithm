# 촌 수 계산

# 입력
# n 전체 사람의 수
# 촌 수를 계산해야 하는 서로 다른 두 사람의 번호
# 부모 자식들 간의 관계의 개수 m
# 부모 자식간의 관계를 나타내는 두 번호 x, y 
# x = y의 부모 번호

def dfs(graph, node, visited):
    answer = 0
    
    visited[node] = True

    for i in graph[node]:
        if not visited[i] :
            dfs(graph, i, visited)


n = int(input())
graph = [[] for _ in range(n+1)]

FROM, TO = map(int, input().split())

for _ in range(int(input())) :
    parent, child = map(int, input().split())
    graph[parent].append(child)
    graph[child].append(parent)

print(*graph, sep='\n')


