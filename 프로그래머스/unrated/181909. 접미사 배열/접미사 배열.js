function solution(my_string) {
    let answer = [];
    
    for (let i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(i, my_string.length + 1));
    }
    
    return answer.sort();
}