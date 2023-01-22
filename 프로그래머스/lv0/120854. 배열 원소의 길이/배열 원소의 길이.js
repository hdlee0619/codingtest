const solution = (strlist) => {
    const countNum = [];
    for (let i = 0; i < strlist.length; i++) {
        countNum.push(strlist[i].length);
    }
    return countNum;
};