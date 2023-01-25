const solution = (order) => {
    let count = 0;
    let array = [];
    array = order.toString().split('');

    array.forEach((a) => {
        if (a === '3' || a == '6' || a == '9') {
            count++;
        }
    });
    return count;
};