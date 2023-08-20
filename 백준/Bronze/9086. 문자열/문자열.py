T = int(input())
strArray = [input() for _ in range(T)]

for i in strArray:
    print(i[0] + i[len(i) - 1])