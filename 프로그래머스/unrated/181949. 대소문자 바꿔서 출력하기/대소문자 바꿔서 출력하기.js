const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("");
    
    const answer = str.map((alpabet) => {
        if (alpabet === alpabet.toUpperCase()) {
            return alpabet.toLowerCase();
        } else {
            return alpabet.toUpperCase();
        }
    }).join("");
    
    console.log(answer);
});