const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(filePath).toString().trim().split('\n');

let data = inputData[0].split(' ').map((item) => +item);

let solution = (data) => {
    const chess = [1, 1, 2, 2, 2, 8];
    let answer = [];
    for (let i = 0; i < data.length; i++) {
        let temp = chess[i] - data[i];
        answer.push(temp);
    }
    console.log(...answer); // 타입을 변환하지 않고 하나씩 출력..!
};

solution(data);
