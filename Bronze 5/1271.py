# 가진 돈과 돈을 나눌 생명체의 수를 입력
# 1 <= M <= N <= 10^1000


# 생명체 하나에게 돌아가는 돈의 양 출력
# 1원씩 분배할 수 없는 남은 돈을 출력


N, M = map(int, input().split())
print(N//M)
print(N%M)