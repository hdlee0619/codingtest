function solution(code) {
    let answer = "";
    let isModeOn = false;
    
    code.split("").forEach((item, index) => { 
        if (item === "1") {
            isModeOn = !isModeOn;
        } else {
            if (isModeOn) {
                if (index % 2 !== 0) {
                    answer += item;
                }
            } else {
                if (index % 2 === 0) {
                    answer += item;
                }
            }
        }
    })
    
    return answer.length === 0 ? "EMPTY" : answer;
}