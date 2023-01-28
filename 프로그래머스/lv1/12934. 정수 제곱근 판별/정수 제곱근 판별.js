const solution = (n) => {
    if (Math.sqrt(n) % 1 === 0) {
        let sqrt = Math.sqrt(n) + 1;
        return sqrt ** 2;
    } else {
        return -1;
    }
};