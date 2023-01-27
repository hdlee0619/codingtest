const solution = (absolutes, signs) => {
    let dataArray = [];
    absolutes.forEach((a, i) => {
        if (signs[i] === true) {
            dataArray.push(a);
        } else {
            dataArray.push(-a);
        }
    });
    return dataArray.reduce((a, b) => a + b);
};