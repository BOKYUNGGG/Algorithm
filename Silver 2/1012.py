# 유기농 배추

# 입력
# M 가로길이
# N 세로길이
# K 배추 개수
import sys 
sys.setrecursionlimit(10**6)

def dfs(x,y):
    if x <= -1 or M <= x or y <= -1 or N <= y :
        return False
    
    if graph[y][x] == 1 :
        graph[y][x] = 0

        dfs(x-1, y)
        dfs(x+1, y)
        dfs(x, y-1)
        dfs(x, y+1)

        return True
    
    return False

# 테스트 케이스 입력
T = int(input())
results = [0]*T

for i in range(T):
    # 입력
    M, N, K = map(int, input().split())

    # 그래프 초기화
    graph = [[0] * M for _ in range(N)]

    # 위치 입력
    for _ in range(K):
        x, y = map(int, input().split())
        graph[y][x] = 1

    for y in range(N):
        for x in range(M):
            if dfs(x,y) == True :
                results[i] += 1

for result in results :
    print(result)