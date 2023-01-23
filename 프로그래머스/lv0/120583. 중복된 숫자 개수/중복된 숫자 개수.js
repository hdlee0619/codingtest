function solution(array, n) {
    let count = 0;
    array.forEach((a) => {
        if (a === n) {
            count++;
        }
    });
    return count;
}