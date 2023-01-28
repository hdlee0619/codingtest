const solution = (arr) => {
    let Array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            Array.push(arr[i]);
        }
    }

    if (Array[Array.length - 2] === Array[Array.length - 1]) {
        Array.pop();
    }
    return Array;
};