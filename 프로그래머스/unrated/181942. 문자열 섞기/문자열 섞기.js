function solution(str1, str2) {
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    
    const answer = [];
    
    str1Arr.forEach((string, index) => {
        answer.push(string);
        answer.push(str2Arr[index])
    })
    
    return answer.join("");
}