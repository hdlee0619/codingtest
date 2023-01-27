const solution = (a, b) => {
    let date = [a, b, '2016'];
    date.join(' ');
    return new Date(date).toString().slice(0, 3).toUpperCase();
};