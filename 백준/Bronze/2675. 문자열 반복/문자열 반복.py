N = int(input())

for _ in range(N):
    answer = []
    count, str = input().split()
    for i in str:
        for _ in range(int(count)):
            answer.append(i)
    
    print(''.join(answer))