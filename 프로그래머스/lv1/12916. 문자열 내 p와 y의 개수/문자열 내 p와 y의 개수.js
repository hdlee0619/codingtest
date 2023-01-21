function solution(s) {
    let checkNum = 0;
    let array = [];
    for (let i = 0; i < s.length; i++) {
        array.push(s[i]);
    }
    let countP = 0;
    let countY = 0;
    for (let i = 0; i < array.length; i++) {
        if ('p' === array[i] || 'P' === array[i]) {
            countP++;
        }
        if ('y' === array[i] || 'Y' === array[i]) {
            countY++;
        }
    }
    if (countP === countY) {
        return true;
    } else {
        return false;
    }
}