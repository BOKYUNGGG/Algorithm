array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array):
	# 종료 조건
	if len(array) <= 1:
		return array
	
	# 피벗 설정
	pivot = array[0]
	# 피벗을 제외한 나머지 리스트
	tail = array[1:]
	
	# 분할된 왼쪽 부분(피벗값보다 작거나 같은 부분)
	left_side = [x for x in tail if x <= pivot]
	# 분할된 오른쪽 부분(피벗값보다 큰 부분)
	right_side = [x for x in tail if pivot < x]

	return quick_sort(left_side) + [pivot] + quick_sort(right_side)

print(quick_sort(array))