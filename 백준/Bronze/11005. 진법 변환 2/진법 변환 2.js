const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split(" ");


const num = Number(input[0]);
const numSystem = Number(input[1]);

const changeNumber = (number, numberSystem) => {
    const SYSTEM = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const answer = [];
    let share = number;

    while (share > 0) {
        const rest = share % numberSystem;
        answer.push(SYSTEM[rest]);
        share = Math.floor(share / numberSystem);
    }

    return answer.reverse();
}

const answer = changeNumber(num, numSystem).join("");

console.log(answer);