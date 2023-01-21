const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(filePath).toString().trim().split('\n');

let data = inputData[0].split(' ').map((item) => +item);

let solution = (data) => {
    const a = data[0];
    const b = data[1];
    const c = data[2];
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
};

solution(data);