# N(세로) * M(가로) 크기의 얼음 틀이 있습니다. 
# 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시됩니다.
# 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주합니다.
# 이때 얼음 틀의 모양이 주어졌을 때 생성되는 아이스크림의 개수를 구하는 프로그램을 작성하세요.
# 다음 4 * 5 얼음 틀 예시에서는 아이스크림이 총 3개 생성됩니다.

# 00110
# 00011
# 11111
# 00000

N, M = list(map(int, input().split()))
print('세로 ', N)
print('가로', M)

graph = []
for _ in range(N):
    graph.append(list(map(int, input())))
    

print(graph)

def dfs(x,y):
    # 좌표가 범위를 벗어났다면 
    if x <= -1 or N <= x or y <= -1 or M <= y :
        return False
    
    # 아직 방문하지 않은 지점이라면
    if graph[x][y] == 0:
        # 해당 지점을 방문처리하고
        graph[x][y] = 1
        dfs(x-1, y)
        dfs(x+1, y)
        dfs(x, y-1)
        dfs(x, y+1)
        return True
    return False

result = 0
for i in range(N):
    for j in range(M):
        if dfs(i,j) == True: result += 1

print(result)