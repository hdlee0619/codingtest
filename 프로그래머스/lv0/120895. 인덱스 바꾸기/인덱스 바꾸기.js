const solution = (my_string, num1, num2) => {
    let strArray = [...my_string];
    const numOne = strArray[num1];
    const numTwo = strArray[num2];
    strArray[num2] = numOne;
    strArray[num1] = numTwo;
    return strArray.join('');
}