num, notaion = input().split()
num = num[::-1]

array = [str(i) for i in range(10)]
array.extend([chr(i) for i in range(65, 91)])
result = 0

for i, n in enumerate(num):
    result += (int(notaion)**i)*(array.index(n))

print(result)