const solution = (array, height) => {
    let count = 0;
    array.forEach((a) => {
        if (height < a) {
            count++;
        }
    });
    return count;
};