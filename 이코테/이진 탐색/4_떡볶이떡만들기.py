# N, M = map(int, input().split())
# dduck = list(map(int, input().split()))


N = 4
M = 6
dducks = [19, 15, 10, 17]


def binary_search(array, target, start, end) :
    while start <= end :
        mid = (end + start) // 2
        
        rest_dduck = 0
        for dduck in dducks :
            if dduck < mid :
                continue
            rest_dduck += dduck - mid
        
        if rest_dduck == target :
            return mid
        # 잘린 떡이 너무 적으면 
        elif rest_dduck < target :
            end = mid -1
        elif target < rest_dduck :
            start = mid + 1

print(binary_search(dducks, 6, 0, max(dducks)))