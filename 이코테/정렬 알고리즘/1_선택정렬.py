array = [7,5,9,0,1,6,2,4,8]


for i in range(len(array)):
    # 가장 작은 원소의 인덱스
    min_index = i

    # 처리되지 않은 데이터 중
    for j in range(i+1, len(array)) :
        # 가장 작은 데이터를 선택
        if array[min_index] > array[j]:
            min_index = j
    # 선택된 가장 작은 데이터를 맨 앞에 있는 데이터와 교환
    array[i], array[min_index] = array[min_index], array[i]

print(array)