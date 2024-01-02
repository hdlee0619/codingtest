function solution(s) {
    const arr = s.split(" ");
    let sum = 0;
    let prevNum = "";
    
    arr.forEach(item => {
        if (item === "Z") {
            sum -= Number(prevNum);
        } else {
            sum += Number(item);
        }
        prevNum = item;
    })
    
    return sum;
}