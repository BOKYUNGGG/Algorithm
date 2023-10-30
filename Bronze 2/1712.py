# input
# A = 고정비용
# B = 가변비용 / 노트북 한 대
# C = 노트북가격

# 총 비용
# A + (B - C) * 노트북 대 수 > 0
# -A / (B - C) < 수


A, B, C = map(int, input().split())

if C <= B :
    print(-1)
else :
    print(-A // (B - C) + 1)
