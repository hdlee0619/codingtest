function solution(n, control) {
    let answer = n;
    
    control.split("").forEach((word) => {
        switch(word) {
            case 'w':
                console.log(answer);
                answer += 1;
                break;
            case 's':
                answer -= 1;
                break;
            case 'd':
                answer += 10;
                break;
            case 'a':
                answer -= 10;
                break;
        }
    })
    
    return answer;
}