const solution = (num) => {
    let number = num;
    let count = 0;
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
            count++;
        } else if (number % 2 === 1) {
            number = number * 3 + 1;
            count++;
        }
    }
    if (count > 500) {
        return -1;
    } else {
        return count;
    }
};