function solution(a, d, included) {
    let answer = 0;
    let currentNum = 0;
    
    included.forEach((item, index) => {
        currentNum += index === 0 ? a : d;
        if (item) {
            answer += currentNum;
        }
    })
    
    return answer;
}