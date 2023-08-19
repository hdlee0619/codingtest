from sys import stdin

N = int(stdin.readline())

for _ in range(N):
    a, b = map(int, stdin.readline().rstrip().split())
    print(a + b)