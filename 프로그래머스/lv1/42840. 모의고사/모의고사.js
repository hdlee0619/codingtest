const solution = (answer) => {
    const manOne = [1, 2, 3, 4, 5];
    let countOne = 0;
    const manTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    let countTwo = 0;
    const manThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countThree = 0;

    while (answer.length > manOne.length) {
        manOne.forEach((a) => {
            manOne.push(a);
        });
    }
    while (answer.length > manTwo.length) {
        manTwo.forEach((a) => {
            manTwo.push(a);
        });
    }
    while (answer.length > manThree.length) {
        manThree.forEach((a) => {
            manThree.push(a);
        });
    }

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === manOne[i]) {
            countOne++;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === manTwo[i]) {
            countTwo++;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === manThree[i]) {
            countThree++;
        }
    }

    let wow = [countOne, countTwo, countThree];
    let max = Math.max(...wow);
    let total = [];
    wow.forEach((a, i) => {
        if (a === max) {
            total.push(i + 1);
        }
    });
    return total;
};