function solution(a, b) {
    const num1 = Number(`${a}${b}`);
    const num2 = 2 * a * b;
    
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}