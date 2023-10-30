def measures(number) :
    result = []

    for i in range(1, int(number*0.5)):
        if number % i == 0 :
            result.append(i)
            result.append(number//i)
    
    return set(result)


def solution(arrayA, arrayB):
    setA = []
    for a in arrayA :
        setA.append(measures(a))
    
    commonA = setA[0]
    for i in range(1, len(arrayA)) :
        commonA = commonA & setA[i]
        
    setB = []
    for b in arrayB :
        setB.append(measures(b))
    
    commonB = setB[0]
    for i in range(1, len(arrayB)):
        commonB = commonB & setB[i]

    commonA.remove(1)
    commonB.remove(1)
    
    a = commonA - commonB
    b = commonB - commonA

    print(f'setA : {setA}')
    print(f'setB : {setB}')
    print(f'commonA : {commonA}')
    print(f'commonB : {commonB}')
    print(f'a : {a}')
    print(f'b : {b}')

    

# print(solution([14,35,119],[18,30,102]))
solution([10, 17],[5, 20])

