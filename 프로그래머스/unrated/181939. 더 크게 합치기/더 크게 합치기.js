function solution(a, b) {
    if (Number(`${a}${b}`) < Number(`${b}${a}`)) {
        return Number(`${b}${a}`);
    } else {
        return Number(`${a}${b}`);
    }
    
}