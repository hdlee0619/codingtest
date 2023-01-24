function solution(message) {
    let answer = 0;
    message.split('').map(() => answer += 2);
    return answer
}