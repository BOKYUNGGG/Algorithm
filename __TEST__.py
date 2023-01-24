from collections import deque

start = [(0,0), (2,2), (4,5)]
queue = deque([start])
print(queue)

while queue : 
    v = queue.popleft()
    print(v)