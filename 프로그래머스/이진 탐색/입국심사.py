def binary_search(times, n, start, end) :
    result = []
    
    while start <= end :
        # 중간값
        mid = (start + end) // 2
        # 중간값 이내에 통과한 사람 수
        count = getCount(times, mid)
        
        if n == count :
            result.append(mid)
            end = mid -1
        elif n < count :
            result.append(mid)
            end = mid - 1
        elif count < n :
            start = mid + 1
        
    return result


def getCount(times, mid) :
    result = 0
    for time in times :
        result += (mid // time)
    return result

def solution(n, times):
    answer = min(binary_search(times, n, 0, n*min(times)))
    return answer