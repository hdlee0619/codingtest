function solution(array) {
    let frequency = new Map();
    array.forEach((num) => {
        if (!frequency.get(num)) {
            frequency.set(num, 1)
        } else {
            frequency.set(num, frequency.get(num) + 1)
        }
    })
    
    let maxKey = 0;
    let maxNum = 0;
    let duple = 0;

    frequency.forEach((num, key) => {
        console.log(num, key)
        if (num > maxNum) {
            maxKey = key;
            maxNum = num;
        }
    })
        
    frequency.forEach(num => {
        if (num === maxNum) {
            duple += 1;
        }
    })
    

    return duple >= 2 ? -1 : maxKey;
}