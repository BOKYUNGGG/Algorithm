# 단지 번호 붙이기

N = int(input())
graph = []

for _ in range(N) :
    graph.append(list(input()))

components = []

def dfs(x,y) : 
    # 좌표 범위를 벗어났다면 
    if x<= -1 or N <= x or y <= -1 or N <= y :
        return False

    # 아직 방문하지 않은 지점이라면
    if graph[x][y] == 1:
        # 방문처리
        graph[x][y] = 0
        # 인점 노드 방문
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y-1)
        dfs(x,y+1)
        return True
    # 방문한 지점이라면
    return False
    

for i in range(N) :
    for j in range(N) :
        result = 0
        if dfs(i,j) == True :
            result += 1
        
        if result != 0 :
            components.append(result)

print(components)