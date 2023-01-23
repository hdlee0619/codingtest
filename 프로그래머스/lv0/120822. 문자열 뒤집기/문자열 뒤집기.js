const solution = (str) => {
    let data;
    let answer;
    data = str.split('');
    data.reverse();
    answer = data.join('');
    return answer;
};