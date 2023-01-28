const solution = (str) => {
    let data = [...str];
    return data.sort().reverse().join('');
};