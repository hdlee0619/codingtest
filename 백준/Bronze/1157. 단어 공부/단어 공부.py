STR = list(input().lower())
SET_STR = list(set(STR))

count = []
for i in SET_STR:
    count.append(STR.count(i))

if count.count(max(count)) > 1:
    print('?')
else:
    print(SET_STR[count.index(max(count))].upper())