function solution(num_list) {
    const answer = [...num_list];
    const last = num_list[num_list.length - 1];
    const prevLast = num_list[num_list.length - 2]
    
    if (last > prevLast) {
        answer.push(last - prevLast);
    } else {
            answer.push(last * 2);
        }
    
    return answer;
}