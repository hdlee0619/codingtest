morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
};

const solution = (letter) => {
    let array = [];
    array = letter.split(' ');
    let answer = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < Object.keys(morse).length; j++) {
            if (array[i] == Object.keys(morse)[j]) {
                answer += Object.values(morse)[j];
            }
        }
    }
    return answer;
};