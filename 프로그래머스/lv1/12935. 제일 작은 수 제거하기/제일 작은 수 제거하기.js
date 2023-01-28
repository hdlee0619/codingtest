const solution = (arr) => {
    if (arr.length === 1) {
        return [-1];
    }
    let indexNum = arr.indexOf(Math.min(...arr));
    arr.splice(indexNum, 1);
    return arr;
};