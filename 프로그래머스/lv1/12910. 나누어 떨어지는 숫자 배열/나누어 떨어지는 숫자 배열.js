const solution = (arr, divisor) => {
    let array = [];

    [...arr].filter((a) => {
        if (a % divisor === 0) {
            array.push(a);
        }
    });
    if (array.length !== 0) {
        return array.sort((a, b) => a - b);
    } else {
        return [-1];
    }
};