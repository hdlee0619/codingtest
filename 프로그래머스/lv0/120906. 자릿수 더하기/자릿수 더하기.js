function solution(n) {
    let answer = 0;
    n.toString().split('').map((a) => answer += Number(a));
    return answer                               
}