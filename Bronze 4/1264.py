inputs = []


while True :
    a = input()
    if a == "#" : break 

    inputs.append(a)

for i in inputs :
    print(
        i.count('a') + 
        i.count('e') +
        i.count('i') +
        i.count('o') +
        i.count('u') +
        i.count('A') + 
        i.count('E') +
        i.count('I') +
        i.count('O') +
        i.count('U')
        )