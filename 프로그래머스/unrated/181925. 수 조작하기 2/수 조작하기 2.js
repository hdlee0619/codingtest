function solution(numLog) {
    let answer = "";
    
    numLog.forEach((log, index) => {
        if (index < numLog.length - 1) {
            const diff = numLog[index + 1] - log;
            
            switch(diff) {
                case 1:
                    answer += "w"
                    break;
                case -1:
                    answer += "s"
                    break;
                case 10:
                    answer += "d";
                    break;
                case -10:
                    answer += "a";
                    break;
            }
        }
    })
    
    return answer;
}