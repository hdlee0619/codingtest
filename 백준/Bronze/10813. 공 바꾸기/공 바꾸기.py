N, M = map(int, input().split())

array = [i for i in range(1, N + 1)]

for _ in range(M):
    a, b = map(int, input().split())
    array[a - 1], array[b - 1] = array[b - 1], array[a - 1]

print(*array)