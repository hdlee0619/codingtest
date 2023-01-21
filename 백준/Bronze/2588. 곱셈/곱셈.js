const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(filePath).toString().trim().split('\n');

let solution = (up, down) => {
    for (let j = up.length - 1; j >= 0; j--) {
        console.log(+up * +down[j]);
    }
    console.log(+up * +down);
};

solution(inputData[0], inputData[1]);