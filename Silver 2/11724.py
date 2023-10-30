# 제목
# 연결 요소의 개수

# 설명
# 방향없는 그래프가 주어졌을 때, 연결 요소(Connected Component)의 개수를 구하라

# 입력
# N, M
# N : 정점의 개수 (1 <= N <= 1,000)
# M : 간선의 개수 (0 <= M <= N * (N-1) / 2)
# u, v 
# u : 간선 시작
# v : 간선 끝
import sys 
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

N, M = map(int, input().split())
graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)

for _ in range(M) :
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

def dfs(graph, node, visited) :
    visited[node] = True

    for i in graph[node] :
        if not visited[i] :
            dfs(graph, i, visited)


result = 0
for i in range(1, N+1) :
    if not visited[i] : 
        result += 1
        dfs(graph, i, visited)

print(result)
