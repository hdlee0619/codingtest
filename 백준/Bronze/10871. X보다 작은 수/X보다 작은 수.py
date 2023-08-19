N, num = map(int, input().split())
array = list(map(int, input().split()))

answer = []

for i in array:
    if i < num:
        answer.append(str(i))

print(' '.join(answer))