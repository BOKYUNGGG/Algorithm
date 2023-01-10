from bisect import bisect_left, bisect_right

# N, x = map(int, input().split())
# elements = list(map(int, input().split()))
N = 7
x = 2
elements = [1,1,2,2,2,2,3]

def count_by_range(array, start, end) :
    start = bisect_left(array, start)
    end = bisect_right(array, end)
    return end-start

count = count_by_range(elements, x, x)

if count == 0 :
    print(-1)
else :
    print(count)