const solution = (n) => {
    let numbers = [];
    let answer = [];
    numbers = n.toString().split('').reverse();
    numbers.forEach((a) => answer.push(Number(a)));
    return answer;
};