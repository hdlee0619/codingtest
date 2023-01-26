function solution(my_string) {
    const num = "0123456789"
    return my_string.toString().split('').filter((a) => num.includes(a)).reduce((a, b)=>Number(a) + Number(b));
}