function solution(n) {
    let result = 0
    // 제한사항의 최대 값이 !10이므로 10번만 반복
    for(let i = 1 ; i <= 10; i++) {
        // n이 i의 팩토리얼보다 크다면, 그때의 i 값이 최대 팩토리얼이므로 
        // i를 result에 할당
        if(n >= getFacto(i)) {
            result = i
            continue
        } else {
            break
        }
    }
    return result
}
// 팩토리얼을 구하는 함수
function getFacto(num) {
    // 재귀를 통해 n*n-1... 을 구현
    if(num > 1) return num*getFacto(num-1)
    return num
}