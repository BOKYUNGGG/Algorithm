maps = [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,0],
    [0,0,0,0,1]
]

# 1. 시작점을 방문처리 한다.
# 2. 상하좌우를 살펴 좌표계를 벗어나는지 검사한다.
# 3. 상하좌우 노드가 방문하지 않은 노드이고, 갈 수 있는 노드라면 위치를 옮긴다.



가로 = len(maps[0])
세로 = len(maps)
dx = [-1, +1, 0, 0]
dy = [0, 0, +1, -1]

from collections import deque

def bfs(x,y) :
    
    q = deque()
    q.append((x,y))

    while q :
        x, y = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or 가로 <= nx or ny < 0 or 세로 <= ny :
                continue
            
            if maps[ny][nx] == 0 :
                continue   

            if maps[ny][nx] == 1 :
                maps[ny][nx] = maps[y][x] + 1
                q.append((nx, ny))

bfs(0,0)
print(*maps, sep="\n")

if maps[세로-1][가로-1] == 1 :
    print(-1)
else :
    print(maps[세로-1][가로-1]) 