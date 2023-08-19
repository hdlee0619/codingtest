N = int(input())

for num in range(N):
    print(str(" " * (N - num - 1)) + str("*" * (num + 1)))