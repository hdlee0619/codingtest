STR = list(input())

def phone_num(STR):
    TEL_ARRAY = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 
             'PQRS', 'TUV', 'WXYZ', 'OPERATOR']
    array = []

    for i in STR:
        for j in TEL_ARRAY:
            if i == 'OPERATOR':
                array.append(8)
                break
            elif i in j:
                array.append(TEL_ARRAY.index(j))
                break
    
    return array

def count_time(array):
    answer = []
    for i in array:
        answer.append(i + 3)

    return sum(answer)

print(count_time(phone_num(STR)))