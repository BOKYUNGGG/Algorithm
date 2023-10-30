# 섬의 개수
# dfs
import sys
sys.setrecursionlimit(10**6) 

def dfs(x,y):
    if x <= -1 or w <= x or y <= -1 or h <= y :
        return False

    if graph[y][x] == 1 :
        graph[y][x] = 0
        
        dfs(x-1, y-1)
        dfs(x-1, y)
        dfs(x-1, y+1)
        dfs(x, y-1)
        dfs(x, y+1)
        dfs(x+1, y-1)
        dfs(x+1, y)
        dfs(x+1, y+1)

        return True
    
    return False
        

while True :
    # 5 4
    w, h = map(int, input().split())
    if w == 0 and h == 0 : 
        break


    # graph
    # [1, 0, 1, 0, 0]
    # [1, 0, 0, 0, 0]
    # [1, 0, 1, 0, 1]
    # [1, 0, 0, 1, 0]
    graph = []
    for _ in range(h) :
        temp = list(map(int, input().split()))
        graph.append(temp)

    result = 0
    for y in range(h):
        for x in range(w):
            if dfs(x,y) == True: 
                result += 1
    print(result)

