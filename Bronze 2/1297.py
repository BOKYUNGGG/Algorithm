# 입력
# D 대각선의 길이
# H 높이 비율
# W 너비 비율

# 출력
# 높이 너비


D, H, W = map(int, input().split())

temp = D / ((H*H + W*W)**(1/2))
print(f'{int(temp*H)} {int(temp*W)}')