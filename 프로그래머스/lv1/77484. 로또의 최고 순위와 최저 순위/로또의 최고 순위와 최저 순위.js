const solution = (lottos, win_nums) => {
    let win = [...win_nums];
    let lotto = [...lottos];
    let zeroCount = 0;
    let count = 0;
    let total = 0;
    let answer = [];
    lotto.forEach((a) => {
        if (a === 0) {
            zeroCount++;
        }
    });
    for (let i = 0; i < lotto.length; i++) {
        for (let j = 0; j < lotto.length; j++) {
            if (lotto[i] === win[j]) {
                count++;
            }
        }
    }

    total = zeroCount + count;

    switch (total) {
        case 6:
            answer.push(1);
            break;

        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
    }

    switch (count) {
        case 6:
            answer.push(1);
            break;

        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
    }
    return answer;
};