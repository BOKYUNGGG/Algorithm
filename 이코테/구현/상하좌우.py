# 여행가 A는 N * N 크기의 정사각형 공간 위에 서 있습니다.
# 이 공간은 1 * 1 크기의 정사각형으로 나누어져 있습니다.
# 가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N,N)에 해당합니다.
# 여행가 A는 상, 하, 좌, 우 방향으로 이동할 수 있으며, 사각 좌표는 항상(1,1) 입니다.
# 우리 앞에는 여행가 A가 이동할 계획이 적힌 계획서가 놓여 있습니다.

# 계획서에는 하나의 줄에 띄어쓰기를 기준으로 하여 L, R, U, D 중 하나의 문자가 반복적으로 적혀 있습니다.
# L : 왼쪽으로 한 칸 이동
# R : 오른쪽으로 한 칸 이동
# U : 위쪽으로 한 칸 이동
# D : 아래쪽으로 한 칸 이동

N = int(input())
x, y = 1, 1
# L L R R U D U D
plans = input().split()



# 방향 벡터 설정
vectors = ['L','R','U','D']
dx = [0, 0, -1, 0]
dy = [-1, +1, 0, 0]

# L
for plan in plans :
    
    for i in range(4) :
        # vectors[0] 'L' == 'L'
        if vectors[i] == plan :
            next_x = x + dx[i]
            next_y = y + dy[i]
    
    # 공간을 벗어날 경우 이동하지 않는다.
    if next_x < 1 or N < next_x or next_y < 1 or N < next_y : 
        continue

    x = next_x
    y = next_y

print('(',x,',',y,')')
