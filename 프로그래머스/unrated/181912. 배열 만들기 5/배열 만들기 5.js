function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.forEach(item => {
        let sliceNumber = Number(item.slice(s, s + l));
        
        if (sliceNumber > k) {
            answer.push(sliceNumber);
        }
    })
    
    return answer;
}