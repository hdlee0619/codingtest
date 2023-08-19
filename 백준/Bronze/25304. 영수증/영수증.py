total_price = int(input())
N = int(input())
total = 0

for _ in range(N):
    product_price, count = map(int, input().split())
    total += product_price * count

if total_price ==total:
    print('Yes')
else:
    print('No')