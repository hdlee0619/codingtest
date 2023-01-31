const solution = (num) => {
    let array = [];
    for (let i = 1; i <= num; i++) {
        let temp = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                temp.push(i);
            }
        }
        if (temp.length >= 3) {
            array.push(i);
        }
    }
    return array.length;
};