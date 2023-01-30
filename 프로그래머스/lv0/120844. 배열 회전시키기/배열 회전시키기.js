function solution(numbers, direction) {
    let answer = [...numbers];

    if (direction === 'right') {
        answer.unshift(numbers[numbers.length - 1]);
        answer.pop();
        return answer;
    } else {
        answer.push(numbers[0]);
        answer.shift(numbers[numbers.length - 1]);
        return answer;
    }
}