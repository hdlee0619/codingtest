function solution(number) {
    const sum = number.split("").reduce((a, b) => Number(a) + Number(b));
    
    return sum % 9;
}