# 정렬 알고리즘

- 목차

### Description

- 정렬이란 **데이터를 특정한 기준에 따라 순서대로 나열**하는 것
- 일반적으로 문제 상황에 따라서 적절한 정렬 알고리즘을 공식처럼 사용

### 1️⃣ 선택 정렬

---

- 처리되지 않은 데이터 중에서 **가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 것을 반복**

```python
# 1. 가장 작은 원소의 인덱스
# 2. 처리되지 않은 데이터 중
# 3. 가장 작은 데이터 선택
# 4. 선택된 가장 작은 데이터와 맨 앞에 있는 데이터와 교환
```

### 2️⃣ 삽입 정렬

---

- 처리되지 않은 데이터를 하나씩 골라 **적절한 위치에 삽입**합니다.
- 선택 정렬에 비해 구현 난이도가 높은 편이지만, 일반적으로 더 효율적으로 동작

```python
# 1. 인덱스 i부터 1까지 1씩 감소하며 반복
# 2. 왼쪽 인덱스가 자신보다 크다면, 스와프
# 3. 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
```

### 3️⃣ 퀵 정렬

---

- 기준 데이터를 설정하고 그 **기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법**
- 피벗 설정, 스왑, 분할과정을 재귀적으로 수행
- 평균 시간 복잡도 : $O(NlogN)$
- 최악 시간 복잡도 : $O(N^2)$ → 이미 정렬된 배열에 대해서 퀵 정렬을 수행할 경우

```python
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
```

![quick sort.png](https://raw.githubusercontent.com/BOKYUNGGG/Algorithm/main/images/quick_sort.png)

<aside>
💡 파이썬의 장점을 살린 방식

```python
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
```

</aside>

### 4️⃣ 계수 정렬

---

- 특정한 조건이 부합할 때만 사용 가능
    - **데이터의 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때** 사용 가능
    - 데이터의 개수가 $N$, 데이터(양수) 중 최댓값이 $K$일 때 최악의 경우에도 $O(N + K)$ 보장
- **매우 빠르게 동작**하는 정렬 알고리즘
- **원소의 값(계수)을 인덱스**로 갖고, **원소의 등장 횟수를 값**으로 갖는 카운트 리스트를 작성

```python
# 모든 원소의 값이 0보다 크거나 같다고 가정
array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]
# 모든 원소의 값을 포함할 수 있는 리스트 선언
count = [0] * (max(array)+1)

for i in range(len(array)) :
	count[array[i]] += 1

for i in range(len(count)) :
	for j in range(count[i]) :
		print(i, end=' ')
```

<aside>
💡 계수 정렬 복잡도 분석

- 계수 정렬의 시간 복잡도와 공간 복잡도는 모두 $O(N+K)$계
- 계수 정렬은 때에 따라서 심각한 비효율성을 초래할 수 있습니다.
    - 데이터가 0과 999,999로 단 2개만 존재하는 경우
- 계수 정렬은 **동일한 값을 가지는 데이터가 여러 개 등장할 때** 효과적으로 사용
    - 성적의 경우 100점을 맞은 학생이 여러 명일 수 있기 때문에 계수 정렬이 효과적
</aside>

### 5️⃣ 정렬 알고리즘 비교

---

- 앞서 다룬 네 가지 정렬 알고리즘을 비교
- 대부분의 프로그래밍 언어에서 지원하는 표준 정렬 라이브러리는 최악의 경우에도 $O(NlogN)$을 보장

| 알고리즘 | 평균 시간 복잡도 | 공간 복잡도 | 특징 |
| --- | --- | --- | --- |
| 선택 정렬 | $O(N^2)$ | $O(N)$ | 아이디어가 매우 간단 |
| 삽입 정렬 | $O(N^2)$ | $O(N)$ | 데이터가 거의 정렬되어 있을 때 가장 빠름 |
| 퀵 정렬 | $O(NlogN)$ | $O(N)$ | 대부분의 경우에 가장 적합, 충분히 빠름 |
| 계수 정렬 | $O(N+K)$ | $O(N+K)$ | 데이터의 크기가 한정되어 있는 경우에만 사용하지만 매우 빠름 |

### 6️⃣ 정렬 알고리즘과 정렬 라이브러리 수행 시간 비교

- 선택 정렬 성능 측정 :  9.011295318603516
- 정렬 라이브러리 성능 측정 :  0.000659942626953125

```python
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

```

```python
from random import randint
import time

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
```

### 7️⃣ 두 배열의 원소 교체

- 문제 설명
    - N개의 자연수 원소로 구성된 두 개의 배열 A와 B
    - 최대 K 번의 **바꿔치기 연산**(배열 A와 배열 B의 원소를 바꾸는 것)을 수행
    - 최종 목표는 배열 A의 모든 원소의 합이 최대가 되도록 하는 것
    - 배열 A의 모든 원소의 합의 최댓값을 출력
- 입력 조건
    - 첫 번째 줄에 N, K가 공백을 기준으로 구분되어 입력(1 ≤ N ≤ 100,000, 0 ≤ K ≤ N)
    - 두 번째 줄에 배열 A의 원소들이 공백을 기준으로 구분되어 입력(원소는 10,000,000보다 작은 자연수)
    - 세 번째 줄에 배열 B의 원소들이 공백을 기준으로 구분되어 입력(원소는 10,000,000보다 작은 자연수)
- 출력 조건
    - 최대 K번의 바꿔치기 연산을 수행하여 만들 수 있는 배열 A의 모든 원소의 합의 최댓값 출력

```python
# A 오름차순 정렬
# B 내림차순 정렬
# A[0] ~ A[K-1]
# B[0] ~ B[K-1] 변경

N, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort()
B.sort(reverse=True)

for i in range(K):
    if A[i] < B[i] :
        A[i], B[i] = B[i], A[i]
		else : 
			break

print(sum(A))
```