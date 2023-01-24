const solution = (n) => {
    let data = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            data.push(i);
        }
    }
    return data;
};