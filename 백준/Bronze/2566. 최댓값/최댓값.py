array = []

for i in range(9):
    temp = []
    arr = list(map(int, input().split()))
    for j in range(9):
        temp.append(arr[j])
    array.append(temp)

max_value = max(map(max, array))

print(max_value)

for i in range(9):
    for j in range(9):
        if max_value == array[i][j]:
            print(i + 1, j + 1)