from bisect import bisect_left, bisect_right


def countRange(array, start, end) : 
    left_index = bisect_left(array, start)
    right_index = bisect_right(array, end)
    return right_index - left_index


array = [1, 2, 4, 4, 7, 8]
print(countRange(array, 4, 4))
print(countRange(array, 1, 5))