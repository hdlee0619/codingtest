array = list(map(str, input().split()))
answer = [int(i[::-1]) for i in array]

print(max(answer))