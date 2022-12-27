# MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드
# 어떤 정사각형은 검은색, 나머지는 흰색
# 보드를 잘라서 8x8 크기의 체스판으로 만들고자함

# 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다.
# 1. 각 칸의 색은 검은색과 흰색 중 하나
# 2. 변을 공유하는 두 개의 사각형은 다른 색

# 보드가 체스판처럼 칠해져 있다는 보장이 없어서,
# 8x8 크기의 체스판으로 잘라낸 후 몇개의 정사각형을 다시 칠하자
# 8x8 크기는 아무데서나 골라도 됨
# 다시 칠해야 하는 정사각형의 최소 개수를 구하여라

# 첫째 줄에 N, M이 주어진다.
# N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수
# 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다.
# B : 검은색, W : 흰색

# N, M 입력
N, M = map(int, input().split())

# N x M 2차원 배열 생성
array = [list(input()) for _ in range(N)]

# 흑은 +1, 백은 -1 값으로 변환
for i in range(N) :
    for j in range(M) :
        if array[i][j] == 'B' : array[i][j] = +1
        if array[i][j] == 'W' : array[i][j] = -1
# print(*array, sep='\n')        


rows = []
cols = []

# 행 총합 계산 후 rows에 삽입
for i in range(N) : 
    temp = 0

    for j in range(M) :
        temp += array[i][j]    
    
    rows.append(temp)

# 열 총합 계산 후 cols에 삽입
for i in range(M) : 
    temp = 0

    for j in range(N) :
        temp += array[j][i]    
    
    cols.append(temp)

print("rows : ", rows)
print("cols : ", cols)

# 이상적인 8*8 찾는 방법?


total_rows = []
total_cols = []

for i in range(N-7) :
    temp = 0
    for j in range(8) : 
        temp += rows[j+i]
    
    total_rows.append(temp)

for i in range(M-7) :
    temp = 0
    for j in range(8) : 
        temp += cols[j+i]    
    total_cols.append(temp)


print("total_rows : ", total_rows)
print("total_cols : ", total_cols)


# 뭔가 이상...
