dic = {1:5}

def result(n) :
    if n in dic:
        return dic[n]

    dic[n] = dic[n-1] + 3*n + 1

    return dic[n]

N = int(input())

print(result(N))