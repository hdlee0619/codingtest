array = list(map(int, input().split()))

if array[0] == array[1] == array[2]:
    print(10000 + array[0] * 1000)
elif array[0] == array[1] or array[0] == array[2]:
    print(1000 + array[0] * 100)
elif array[1] == array[2]:
    print(1000 + array[1] * 100)
else:
    print(max(array) * 100)