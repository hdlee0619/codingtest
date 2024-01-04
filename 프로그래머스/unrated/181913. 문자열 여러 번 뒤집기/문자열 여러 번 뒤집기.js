function solution(my_string, queries) {
    
    
    queries.forEach(([from, to]) => {
        const copyArr = [...my_string];
        const reverseString = copyArr.slice(from, to + 1).reverse().join("");
        copyArr.splice(from, to-from + 1, reverseString);
        my_string = copyArr.join("");
    })
    
    return my_string;
}