array = [int(input()) for _ in range(28)]
array2 = [i for i in range(1, 31)]

for i in array:
    array2.remove(i)

print(*array2)