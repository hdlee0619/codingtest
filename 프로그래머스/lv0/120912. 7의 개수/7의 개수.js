const solution = (array) => {
    let count = 0;
    array = array.map((a) => String(a));
    for (let i = 0; i<array.length; i++) {
        for (let j = 0; j<array[i].length; j++) {
            if (array[i][j] === '7') {
                count++;
            }
            }
        }
        return count;
    }
