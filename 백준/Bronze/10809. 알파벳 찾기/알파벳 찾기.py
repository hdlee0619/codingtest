STR = input()
array = [chr(i) for i in range(ord('a'), ord('z') + 1)]
answer = []

for i in array:
    if i not in STR:
        answer.append(-1)
    else:
       answer.append(STR.index(i))

print(*answer)