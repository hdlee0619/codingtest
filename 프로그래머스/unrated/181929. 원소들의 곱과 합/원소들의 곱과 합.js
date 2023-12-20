function solution(num_list) {
    const sum = num_list.reduce((a, b) => a + b) ** 2;
    const multiple = num_list.reduce((a, b) => a * b);
    return sum > multiple ? 1 : 0; 
}