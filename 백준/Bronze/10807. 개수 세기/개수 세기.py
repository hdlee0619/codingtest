N = input()
array = list(map(int, input().split()))
num = int(input())

count = 0

for i in array:
    if num == i:
        count += 1

print(count)