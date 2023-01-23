const solution = (side) => {
    side.sort((a, b) => b - a);
    if (side[0] < side[1] + side[2]) {
        return 1;
    } else {
        return 2;
    }
};