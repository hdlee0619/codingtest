const solution = (hp) => {
    let count = 0;
    while (hp !== 0) {
        if (hp >= 5) {
            hp -= 5;
            count++;
        } else if (hp >= 3) {
            hp -= 3;
            count++;
        } else if (hp < 3) {
            hp -= 1;
            count++;
        }
    }
    return count;
};