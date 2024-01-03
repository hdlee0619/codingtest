function solution(arr, queries) {
    let answer = [...arr]
    
    queries.forEach(([s, e, k]) => {
        answer.forEach((item, index) => {
            if (s <= index && index <= e) {
                if (index % k === 0) {
                    answer[index] += 1;
                }
            }
        })
    })
    
    return answer;
}