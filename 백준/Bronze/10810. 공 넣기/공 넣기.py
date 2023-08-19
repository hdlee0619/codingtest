bucket, count = map(int, input().split())
array = [0 for i in range(bucket)]

for _ in range(count):
    bucket_start, bucket_end, ball_number = map(int, input().split())

    for i in range(bucket_start - 1, bucket_end):
        array[i] = ball_number

print(*array)