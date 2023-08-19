from sys import stdin

N = int(stdin.readline())

for num in range(N):
    a, b = map(int, stdin.readline().rstrip().split())
    print("Case #" + str(num + 1) + ":" , a , "+" , b , "=" , a + b)