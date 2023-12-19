function solution(my_string, overwrite_string, s) {
    const firstWords = my_string.slice(0, s);
    const secondWords = my_string.slice(s + overwrite_string.length)
    
    return firstWords + overwrite_string + secondWords;
}