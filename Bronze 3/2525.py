# 오븐 시계
# 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면
# 인공지능 오븐이 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산
# 
# 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분 단위로 주어졌을 때,
# 오븐구이가 끝나는 시각을 계산하는 프로그램

# 입력
# 현재 시각 A (0 <= A <= 23)
# 현재 분 B (0 <= B <= 59)
# 요리하는 데 필요한 시간 C (0 <= C <= 1,000)

# 출력
# 종료 시간

from datetime import datetime 
from datetime import timedelta

A, B = map(int, input().split())
C = int(input())

start = datetime.strptime(f'{A}:{B}', '%H:%M')
delta = timedelta(minutes=C)
end = start + delta
print(end.hour, end=' ')
print(end.minute)