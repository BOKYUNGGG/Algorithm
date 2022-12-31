# A 오름차순 정렬
# B 내림차순 정렬
# A[0] ~ A[K-1]
# B[0] ~ B[K-1] 변경


N, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort()
B.sort(reverse=True)

for i in range(K):
    if A[i] < B[i] :
        A[i], B[i] = B[i], A[i]
    else :
        break

print(sum(A))