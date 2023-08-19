N = int(input())
array = list(map(int, input().split()))
answer = []

max = max(array)
for i in array:
        answer.append(i / max * 100)

print(sum(answer)/N)