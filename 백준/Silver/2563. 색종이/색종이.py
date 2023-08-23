N = int(input())

array = [[0]*101 for i in range(101)]
for _ in range(N):
    a, b = (map(int, input().split()))
    for i in range(10):
        for j in range(10):
            array[a + i][b + j] = 1

r = 0
for i in array:
    r += sum(i)

print(r)