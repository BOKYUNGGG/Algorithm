from random import randint
import time

# 배열에 10,000개의 정수 삽입
array = []
for _ in range(10000):
    # 1부터 100 사이의 랜덤한 정수
	array.append(randint(1,100))

# 성능 측정 시작
start_time = time.time()

# 선택 정렬 수행
for i in range(len(array)):
	min_index = i
	for j in range(i+1, len(array)):
		if array[j] < array[min_index] :
			min_index = j
		array[i], array[min_index] = array[min_index], array[i]

# 성능 측정 종료
end_time = time.time()

print('선택 정렬 성능 측정 : ', end_time - start_time) 

# 정렬 라이브러리

array = []
for _ in range(10000):
	array.append(randint(1,100))

# 성능 측정 시작
start_time = time.time()

# 정렬 라이브러리 수행
array.sort()

# 성능 측정 종료
end_time = time.time()

print('정렬 라이브러리 성능 측정 : ', end_time - start_time) 