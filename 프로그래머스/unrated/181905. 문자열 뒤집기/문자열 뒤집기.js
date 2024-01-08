function solution(my_string, s, e) {
    const arr = [...my_string]
    const reverseString = arr.slice(s, e + 1).reverse().join('');
    
    arr.splice(s, reverseString.length, reverseString);
    
    return arr.join('')
}