const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let count = Number(input[0]);
const numbers = [];

for (let i = 1; i <= count; i++) {
    numbers.push(Number(input[i]));
}

const handleChange = (money) => {
    let rest = 0;
    const QUARTER = 25;
    const DIME = 10;
    const NICKEL = 5;
    const PENNY = 1;

    const quarter = Math.floor(money / QUARTER);
    rest = money % QUARTER;
    const dime = Math.floor(rest / DIME);
    rest = rest % DIME;
    const nickel = Math.floor(rest / NICKEL);
    rest = rest % NICKEL;
    const penny = Math.floor(rest / PENNY);

    console.log(`${quarter} ${dime} ${nickel} ${penny}`);
}

numbers.forEach((item) => handleChange(item));