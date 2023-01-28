const solution = (arr) => {
    let tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            tempArray.push(arr[i]);
        }
    }

    if (tempArray[tempArray.length - 2] === tempArray[tempArray.length - 1]) {
        tempArray.pop();
    }
    return tempArray;
};
