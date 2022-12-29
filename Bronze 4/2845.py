# 1 제곱미터 당 몇 명의 사람이 있었는지
# 5개의 신문사에서 참가자의 수를 보도
# 각 신문 기사에 실려있는 참가자의 수가 몇 명 만큼 잘못되어 있는지 구하라

# L = person per square (1~10)
# P = area (1~1000)
L, P = map(int, input().split())

counts = list(map(int, input().split()))


for count in counts :
    print(count - L*P, end=' ')