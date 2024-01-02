function solution(arr, queries) {
    return queries.map(querie => {
        let answer = [];
        const querieArr = arr.slice(querie[0], querie[1] + 1);
        
        querieArr.forEach(num => {
            if (num > querie[2]) {
                answer.push(num);
            }
        })
        
        return answer.length === 0 ? -1 : Math.min(...answer);
    })
}