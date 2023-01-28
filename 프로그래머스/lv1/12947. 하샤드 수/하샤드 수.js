const solution = (num) => {
    let data = num.toString().split('');
    let total = 0;
    if (data.length === 1) {
        return true;
    } else {
        total = data.reduce((a, b) => Number(a) + Number(b));
        if (num % total === 0) {
            return true;
        } else {
            return false;
        }
    }
};