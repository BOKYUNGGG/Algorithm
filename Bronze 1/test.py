A = int(input())
B = list(map(int, input().split()))

B.sort()

print(B[0]*B[A-1])