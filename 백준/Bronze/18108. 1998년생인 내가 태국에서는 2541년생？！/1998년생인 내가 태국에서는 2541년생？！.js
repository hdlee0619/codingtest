const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputData = fs.readFileSync(filePath).toString();

console.log(+inputData - 543);
