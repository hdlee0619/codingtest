bucket, count = map(int, input().split())
array = [i for i in range(1, bucket + 1)]

for _ in range(count):
    a, b = map(int, input().split())
    temp = array[a - 1 : b]
    temp.reverse()
    array[a - 1 : b] = temp

print(*array)