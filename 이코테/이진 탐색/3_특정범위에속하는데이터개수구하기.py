from bisect import bisect_left, bisect_right


def countRange(array, start, end) : 
    left_index = bisect_left(array, start)
    right_index = bisect_right(array, end)
    return right_index - left_index


array = [1, 2, 4, 4, 7, 8]

# [4] 범위의 요소 개수 구하기
print(countRange(array, 4, 4))
# [1, 5] 범위의 요소 개수 구하기
print(countRange(array, 1, 5))