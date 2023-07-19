const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let add = () => {
    let numArray = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            numArray.push(+input[i]);
        }
    }
    return numArray[0] + numArray[1];
};
console.log(add());