# 토마토
# DFS

from collections import deque



M = 6
N = 4
# 가로 M, 세로 N
graph = [
    [1,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,1,1]
]
visited = [[False * N] for _ in range(M)]
start = []
for x in range(M) :
    for y in range(N) :
        if graph[y][x] == 1 :
            start.append((x,y))

def bfs(graph, start) :
    queue = deque([start])


    while queue :
        # v = (x,y)
        nodes = queue.popleft()
        
        print(nodes)
        

bfs(graph, start)
        








# def bfs(graph, x, y, day) :
#     # 탐색 종료 조건 1 : 가로 세로 범위 벗어남
#     if x < 0 or M <= x or y < 0 or N <= y :
#         print("탐색 종료 조건 1")
#         return
#     # 탐색 종료 조건 2 : 토마토가 없을 때
#     if graph[y][x] == -1 :
#         print("탐색 종료 조건 2")
#         return     
    
#     # 만약에 익은 토마토가 있다면 bfs 수행
#     if graph[y][x] == 1 :
#         graph[y][x] = 2
#         # 우
#         if 0 <= x+1 < M and 0 <= y < N :
#             if graph[y][x+1] == 0 :
#                 print("탐색 조건 우")
#                 graph[y][x+1] = 1
#                 bfs(graph, x+1, y, day+1)
#         # 좌
#         if 0 <= x-1 < M and 0 <= y < N :
#             if graph[y][x-1] == 0 :
#                 print("탐색 조건 좌")
#                 graph[y][x-1] = 1
#                 bfs(graph, x-1, y, day+1)
#         # 하
#         if 0 <= x < M and 0 <= y+1 < N :
#             if graph[y+1][x] == 0 :
#                 print("탐색 조건 하")
#                 graph[y+1][x] = 1
#                 bfs(graph, x, y+1, day+1)
#         # 상
#         if 0 <= x < M and 0 <= y-1 < N :
#             if graph[y-1][x] == 0 :
#                 print("탐색 조건 상")
#                 graph[y-1][x] = 1
#                 bfs(graph, x, y-1, day+1)