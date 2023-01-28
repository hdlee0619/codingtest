const solution = (n) => {
    let data = n.toString().split('');
    let total = 0;
    data.forEach((a) => (total += +a));
    return total;
};