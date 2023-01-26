const solution = (cipher, code) => {
    const array = [];
    [...cipher].forEach((a, i) => {
        if ((i + 1) % code === 0) {
            array.push(a);
        }
    });
    return array.join('');
};