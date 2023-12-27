function solution(l, r) {
    const answer = [];
    for (let i = l; i <= r; i++) {
        const reg = /^[50]+$/
        if (reg.test(i.toString())) {
            answer.push(i)
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}