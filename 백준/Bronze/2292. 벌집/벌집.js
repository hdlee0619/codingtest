const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString();

const roomNumber = Number(input);
let count = 0;
let roomCount = 1;

while (roomCount < roomNumber) {
    count++;
    roomCount += 6 * count;
}

console.log(count + 1);