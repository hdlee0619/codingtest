const solution = (num) => {
    let threeNum = num.toString(3);
    threeNum = [...threeNum].reverse().join('');
    return parseInt(threeNum, 3);
};