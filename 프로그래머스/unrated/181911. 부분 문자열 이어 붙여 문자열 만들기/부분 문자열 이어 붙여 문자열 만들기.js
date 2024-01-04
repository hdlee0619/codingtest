function solution(my_strings, parts) {
    let answer = [];
    
    parts.forEach(([a, b], index) => {
        answer.push(my_strings[index].slice(a, b + 1));
    })
    
    return answer.join("");
}