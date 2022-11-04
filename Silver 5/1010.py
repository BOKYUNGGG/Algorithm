def factorial(n):
    if n==1 :
        return 1
    elif n==0 :
        return 1
    else :
        return n*factorial(n-1)

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    print(int(factorial(M)/(factorial(N)*factorial(M-N))))
