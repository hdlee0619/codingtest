function solution(my_string, is_suffix) {
    const suffixArr = [];
    
    for (let i = 0; i < my_string.length; i++) {
        suffixArr.push(my_string.slice(i, my_string.length + 1));
    }
    
    return suffixArr.filter(item => item === is_suffix).length;
    
    
}