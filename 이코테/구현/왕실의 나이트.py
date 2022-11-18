# 행복 왕국의 왕실 정원은 체스판과 같은 8 * 8 좌표 평면입니다.
# 왕실 정원의 특정한 한 칸에 나이트가 서 있습니다.
# 나이트는 매우 충성스러운 신하로서 매일 무술연마를 합니다.

# 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며,
# 정원 밖으로 나갈 수 없습니다.

# 나이트는 특정 위치에서 다음과 같은 2가지 경우로 이동할 수 있습니다.
#   1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
#   2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기

# a 6
T = input()
x, y = T[0], T[1]
# alpha = ['a','b','c','d','e','f','g','h']

# for i in range(8) :
#     if x == alpha[i] : x = i

x = int(ord(x)) - int(ord('a')) + 1
y = int(y)

# 방향 벡터
dx = [+2, +2, +1, +1, -2, -2, -1, -1]
dy = [+1, -1, +2, -2, +1, -1, +2, -2]

answer = 0

for i in range(8) :
    next_x = x + dx[i]
    next_y = y + dy[i]
    if next_x < 1 or 8 < next_x or 1 < next_y or 8 < next_y :
        continue
    answer += 1
print(answer)