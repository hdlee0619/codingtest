const solution = (n, numlist) => {
    const array = [];
    numlist.map((a) => {
        if (a % n === 0) {
            array.push(a);
        }
    });
    return array;
};