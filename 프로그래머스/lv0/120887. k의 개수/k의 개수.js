function solution(i, j, k) {
    let count = 0;
    let array = [];
    for (let a = i; a <= j; a++) {
        a = a.toString();
        for (let b = 0; b < a.length; b++) {
            array.push(a[b].toString());
        }
    }
    array.forEach((item) => {
        if (item.includes(k.toString())) {
            count++;
        }
    })
                  
    return count;
}