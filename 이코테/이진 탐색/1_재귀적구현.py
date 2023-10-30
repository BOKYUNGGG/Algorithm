# 이진 탐색 소스코드 구현 (재귀 함수)
def binary_search(array, target, start, end):
    if end < start :
        return None
    mid = (start + end) // 2
    
    # 찾은 경우 중간점 인덱스 반환
    if array[mid] == target :
        return mid
    
    # 찾고자 하는 값보다 중간점의 값이 더 큰 경우 왼쪽 확인
    elif target < array[mid] :
        return binary_search(array, target, start, mid-1)
    # 찾고자 하는 값보다 중간점의 값이 더 작은 경우 오른쪽 확인
    else :
        return binary_search(array, target, mid+1, end)

N, target = map(int, input().split())
array = list(map(int, input().split()))
result = binary_search(array, target, 0, N-1)

if result == None :
    print('원소가 존재하지 않습니다.')
else :
    print(result + 1)