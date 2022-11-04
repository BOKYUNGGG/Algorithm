# 단어의 개수 입력
N = int(input())

# inputs = []
inputs = list()

# inputs = ["i", "sad", "it", "do", "for", "happy"]
for _ in range(N):
    inputs.append(input())

# answer = {}
answer = dict()

# answer = {
# 1 : set(), 
# 3 : set(), 
# 2 : set(),
# 5 : set()
# }
for element in inputs :
    answer[len(element)] = set()

# answer = { 
# 1 : {"i"},
# 3 : {"sad", "for"},
# 2 : {"it", "do"}, 
# 5 : {"happy"}
# }
for element in inputs :
    answer[len(element)].add(element)


# answer = [
# (1, {'i'}),
# (2, {"it", "do"}),
# (3, {"sad", "for"})
# (5, {"happy"})
# ]
answer = sorted(answer.items(), key= lambda item: item[0])


for i in answer :
    
    # tmp = ["it", "do"]
    tmp = list(i[1])

    # tmp = ["do", "it"]
    tmp.sort()
    for j in tmp:
        print(j)