array = [5, 7, 9, 0, 3, 1, 6, 2, 4 ,8]

def quick_sort(array, start, end):
	# 정렬 종료 조건 : 원소가 1개 남았을 경우
	if end <= start :
		return 

	# 원소 설정(피벗, left, right)
	pivot = start
	left = start + 1
	right = end	

	# 스왑
	while(left <= right):
		# left(큰 데이터)값이 피벗 값보다 큰 데이터를 찾을 때까지 오른쪽 방향으로 선형탐색
		while(left <= end and array[left] <= array[pivot]) :
			left += 1
		
		# right(작은 데이터)값이 피벗 값보다 작은 데이터를 찾을 때까지 왼쪽 방향으로 선형탐색
		while(start < right and array[pivot] <= array[right]) :
			right -= 1

		# left와 right가 엇갈린 경우
		if (right < left) :
			# right(작은 데이터) 값과 피벗 값 스왑
			array[right], array[pivot] = array[pivot], array[right]
		# 엇갈리지 않았을 경우
		else :
			# left(작은 데이터) 값과 right(큰 데이터) 값 스왑
			array[left], array[right] = array[right], array[left]

	# 분할 후 재귀적으로 퀵 정렬 수행
	quick_sort(array, start, right - 1)
	quick_sort(array, right + 1, end)

quick_sort(array, 0, len(array)-1)
print(array)