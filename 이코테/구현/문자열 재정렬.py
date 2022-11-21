# 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어집니다.
# 이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력합니다.
# 예를 들어 K1KA5CB7 이라는 값이 들어오면 ABCKK13을 출력합니다.

# input_data = ['K', '1', 'K', 'A', '5', 'C', 'B', '7']
input_data = list(input())

total = 0
arr = []

# arr = ['K', 'K', 'A', 'C', 'B']
# total = 13
for element in input_data :
    if element.isalpha():
        arr.append(element)
    else : 
        total += int(element)

# arr = ['A', 'B', 'C', 'K', 'K']
arr.sort()

# arr = ['A', 'B', 'C', 'K', 'K', '13']
if total != 0:
    arr.append(str(total))

# ABCKK13
print(''.join(arr))