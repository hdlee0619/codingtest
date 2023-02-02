function solution(t, p) {
    let array = [];
    let count = 0;
    for (let i = 0; i<t.length - p.length + 1; i++) {
        array.push(+t.slice(i, i + p.length));
    }
    for (let i = 0; i < array.length ; i++) {
        if (array[i] <= +p) {
            count++
        }
    }
    return count;
}