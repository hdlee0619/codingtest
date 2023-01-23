const solution = (array) => {
    let answer = [];
    let countOdd = 0;
    let countEven = 0;
    array.forEach((v) => {
        if (v % 2 === 0) {
            countOdd++;
        } else {
            countEven++;
        }
    });
    answer.push(countOdd);
    answer.push(countEven);
    return answer;
};