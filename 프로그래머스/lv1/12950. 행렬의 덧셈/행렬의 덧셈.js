const solution = (arr1, arr2) => {
    let dataArray = [];
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        dataArray.push(temp);
        temp = [];
    }
    return dataArray;
};