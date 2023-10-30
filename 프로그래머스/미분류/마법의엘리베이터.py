def solution(storey) :
    answer = 0


    while 0 < storey :
        rest = storey % 10
        
        if 6 <= rest :
            answer += 10 - rest
            storey = (storey // 10) + 1
        elif rest == 5 :
            if 6 <= ((storey % 100)//10) :
                storey = storey + rest
                answer += 5
            else :
                answer += rest
                storey = storey // 10
        else :
            answer += rest
            storey = storey // 10

    return answer


print(solution(75))