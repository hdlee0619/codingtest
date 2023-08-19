array = list(map(int, input().split()))
if array[0] > array[1]:
    print('>')
elif array[0] < array[1]:
    print('<')
else:
    print("==")