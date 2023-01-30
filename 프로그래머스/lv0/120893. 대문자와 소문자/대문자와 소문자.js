function solution(my_string) {
    let answer = [];
    [...my_string].forEach((a) => {
        if (a.toLowerCase() === a) {
            answer.push(a.toUpperCase());
        } else if (a.toUpperCase() === a) {
            answer.push(a.toLowerCase());
        }
    });
    return answer.join('');
}