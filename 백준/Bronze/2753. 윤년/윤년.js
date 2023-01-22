const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputData = fs.readFileSync(filePath).toString();

const calYear = (yearData) => {
    const year = Number(yearData);

    if (year % 4 === 0 && year % 100 !== 0) {
        console.log('1');
    } else if (year % 400 === 0) {
        console.log('1');
    } else {
        console.log('0');
    }
};

calYear(inputData);