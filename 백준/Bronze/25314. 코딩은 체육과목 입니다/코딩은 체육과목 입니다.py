num = int(input())
N = num // 4
arr = []

for _ in range(N):
    arr.append("long")
arr.append("int")

print(' '.join(arr))