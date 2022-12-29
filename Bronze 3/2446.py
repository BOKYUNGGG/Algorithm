N = int(input())

numbers = []

for i in range(2*N-1) :
    numbers.append(abs(N-i-1))


for number in numbers :
    temp = '*'*number
    print(f'{temp:>{N-1}}', end='')
    print('*', end='')
    print('*'*number)