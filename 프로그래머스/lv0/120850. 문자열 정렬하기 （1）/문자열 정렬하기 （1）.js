const solution = (my_string) => {
    const num = "0123456789";
    return [...my_string].filter((a) => num.includes(a)).sort().map((a) => parseInt(a));
}