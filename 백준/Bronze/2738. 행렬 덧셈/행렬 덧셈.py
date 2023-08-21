N, M = map(int, input().split())

N_array = []
M_array = []
answer = []

for _ in range(0, N):
    temp = []
    value = list(map(int, input().split()))
    for i in range(0, M):
        temp.append(value[i])
    N_array.append(temp)

for _ in range(0, N):
    temp = []
    value = list(map(int, input().split()))
    for i in range(0, M):
        temp.append(value[i])
    M_array.append(temp)

for i in range(N):
    temp = []
    for j in range(M):
        temp.append(N_array[i][j] + M_array[i][j])
    answer.append(temp)

for i in answer:
    print(*i)