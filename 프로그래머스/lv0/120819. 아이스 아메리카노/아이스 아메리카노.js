function solution(money) {
    let answer = []; 
    let ame = ~~(money / 5500); // 주어진 돈이 매개변수, 한잔 5500원
    let a = money % 5500; // 주어진 돈에서 5500원을 나눈 몫이 살 수 있는 잔수
    answer.push(ame);
    answer.push(a) // 나머지 값이 잔돈을 배열에 넣기. 
    return answer;
}