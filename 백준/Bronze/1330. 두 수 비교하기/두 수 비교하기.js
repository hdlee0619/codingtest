const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputData = fs.readFileSync(filePath).toString().trim().split(' ');

let array = [];

inputData.map((a) => array.push(Number(a)));

const solution = (data) => {
    if (+data[0] > +data[1]) {
        console.log('>');
    } else if (+data[0] < +data[1]) {
        console.log('<');
    } else {
        console.log('==');
    }
};

solution(inputData);