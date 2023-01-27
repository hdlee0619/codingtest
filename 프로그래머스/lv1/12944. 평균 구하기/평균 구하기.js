const solution = (arr) => {
    let answer;
    answer = [...arr].reduce(((a, b) => a + b));
    return answer / arr.length;
}