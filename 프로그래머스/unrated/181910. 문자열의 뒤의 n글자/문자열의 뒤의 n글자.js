function solution(my_string, n) {
    const sliceLength = my_string.length - n;
    
    return my_string.slice(sliceLength, my_string.length)
}