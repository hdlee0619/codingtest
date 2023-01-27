const solution = (n) => {
    let str = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            str.push('수');
        } else {
            str.push('박');
        }
    }
    return str.join('');
};