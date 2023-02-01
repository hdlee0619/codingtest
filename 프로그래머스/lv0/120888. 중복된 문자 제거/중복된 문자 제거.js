function solution(my_string) {
    let str = my_string.split('');
    str = [...new Set(str)];
    return str.join('');
}