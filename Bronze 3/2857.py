agents = []
for _ in range(5):
    agents.append(input())

fbis = []
for i in range(5) :
    if "FBI" in agents[i] : fbis.append(str(i+1))

if fbis : 
    print(" ".join(fbis))
else :
    print("HE GOT AWAY!")

