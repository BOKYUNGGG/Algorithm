from collections import deque
# R L U D
dx = [1,-1,0,0]
dy = [0,0,-1,1]

def bfs(graph, x,y, visited) :
    q = deque()
    q.append((x,y))
    
    가로 = len(graph[0])
    세로 = len(graph)
    
    while q :
        x, y = q.popleft()
        
        for i in range(4) :
            nx = x + dx[i]
            ny = y + dy[i]
            
            if nx < 0 or 가로 <= nx or ny < 0 or 세로 <= ny :
                continue
            if graph[ny][nx] == 'X' :
                continue
            if visited[ny][nx] :
                continue

            print(f'nx : {nx}, ny : {ny}')
            graph[ny][nx] += graph[y][x]
            q.append((nx,ny))
        


maps = ["X591X","X1X5X","X231X", "1XXX1"]
graph = []
for map in maps :
    tmp = list(map)
    graph.append(tmp)

print(*graph, sep='\n')
length_x = len(graph[0])
length_y = len(graph)
visited = [[False ]* length_x for _ in range(length_y)]
bfs(graph, 0,0, visited)
print(*graph, sep='\n')