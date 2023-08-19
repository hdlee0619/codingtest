array = list(map(int, input().split()))

hour = array[0]
min = array[1]

NUM = 45

if (min - NUM) >= 0:
    print(str(hour) + " " + str(min - NUM))
elif (min - NUM) < 0:
    if (hour - 1) < 0:
        print(str(23) + " " + str(60 + (min - NUM)))
    else:
        print(str(hour - 1) + " " + str(60 + (min - NUM)))