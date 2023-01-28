const solution = (s) => {
    let data = s.split(' ');
    let string = [];
    for (let i = 0; i < data.length; i++) {
        let temp = [];
        for (let j = 0; j < data[i].length; j++) {
            if (j % 2 === 0) {
                temp.push(data[i][j].toUpperCase());
            } else {
                temp.push(data[i][j].toLowerCase());
            }
        }
        string.push(temp);
        temp = [];
    }
    let answer = [];
    for (let i = 0; i < string.length; i++) {
        answer.push(string[i].join(''));
    }
    return answer.join(' ');
};