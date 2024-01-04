const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString();

const num = Number(input);

console.log((2 ** num + 1) ** 2);