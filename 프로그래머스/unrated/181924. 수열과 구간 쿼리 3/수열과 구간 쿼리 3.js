function solution(arr, queries) {
    let answer = [...arr];
    
    queries.forEach((querie) => {
        const a = answer[querie[0]];
        const b = answer[querie[1]];
        
        answer[querie[0]] = b;
        answer[querie[1]] = a;
    })
    
    return answer;
}