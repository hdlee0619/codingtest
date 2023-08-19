NUM = 42

array = [int(input()) for _ in range(10)]
answer_array = [ i % NUM for i in array]

print(len(set(answer_array)))