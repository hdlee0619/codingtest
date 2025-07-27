import math

def solution(wallet, bill):
    answer = 0
    wallet.sort()
    
    while True:
        bill.sort()
        
        if bill[0] > wallet[0] or bill[1] > wallet[1]:
            bill[1] = math.floor(bill[1] / 2)
            answer += 1
            continue
        else:
            break

    return answer


    