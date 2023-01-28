const solution = (arr) => {
    let array = [];
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= arr.length; j++) {
            if (arr[j] != null && i !== j) {
                array.push(arr[i] + arr[j]);
            }
        }
    }
    answer = new Set([...array]);
    return [...answer].sort((a, b) => a - b);
};