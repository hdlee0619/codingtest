function solution(numbers) {
    let array = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j <= numbers.length; j++) {
            if (isNaN(numbers[i] * numbers[j]) !== true && i !== j) array.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...array);
}