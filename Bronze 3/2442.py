N = int(input())

for i in range(N) :
    temp = '*'*i
    print(f'{temp:>{N-1}}', end='')
    print('*', end='')
    print('*'*i)