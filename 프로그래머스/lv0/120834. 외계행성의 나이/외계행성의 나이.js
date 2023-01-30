function solution(age) {
    let pass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let data = [...age.toString()];
    let answer = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < pass.length; j++) {
            if (Number(data[i]) === j) {
                answer.push(pass[j]);
            }
        }
    }
    return answer.join('');
}