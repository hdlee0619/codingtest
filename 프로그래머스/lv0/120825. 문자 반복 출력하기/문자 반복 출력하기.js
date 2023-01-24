const solution = (my_string, n) => {
    let data = my_string.split('');
    let answer = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < n; j++) {
            answer.push(data[i]);
        }
    }
    return answer.join('');
};