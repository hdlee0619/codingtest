const solution = (num, k) => {
    let array = [...num.toString()];
    let answer = -1;
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === k) {
            answer += array.indexOf(array[i]) + 2;
            return answer;
        }
    }
    return answer;
};