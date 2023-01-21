const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let names = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        names.push(input[i].split(' '));
    }
}

for (let i = 0; i < names.length; i++) {
    let name = names[i][0];

    console.log(name + '??!');
}