const solution = (box, n) => {
    let data = [...box];
    let answer = [];
    for (let i = 0; i < data.length; i++) {
        answer.push(parseInt(data[i] / n));
    }
    return answer.reduce((a, b) => a * b);
};