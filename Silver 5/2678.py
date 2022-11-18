

# 1. EDSAC 명령어 -> 이진수 -> 값
# 2. 값 -> 이진수 -> EDSAC 명령어


# 문제 설명에서는 2번의 계산흐름을 예로 들었지만,
# 입출력 요구사항은 1번의 계산흐름을 요구


# 문제를 풀기 위해 필요한 것
# 문자 -> 2진수
# 숫자 -> 2진수

def opcode(character) :
    string = 'PQWERTYUIOJ#SZK*?F@D!HNM&LXGABCV'
    index = string.find(character)
    return bin(index)

def s(character) : 
    if character == "F" : return "0"
    return "1"

T = int(input())

for _ in range(T) :
    OPCODE, D, S = input().split(" ")
    OPCODE = opcode(OPCODE)[2:].zfill(5)
    D = bin(int(D))[2:].zfill(11)
    S = s(S)
    result = OPCODE + D + S
    answer = 0
    if result[0] == "1" : answer = -1
    print(result[1:])
    for i in range(len(result[1:])) :
        answer = answer + int(result[i+1])/(2**(i+1))
        
    print(float(format(answer, '.16f')))

 