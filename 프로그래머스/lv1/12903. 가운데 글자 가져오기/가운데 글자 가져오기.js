function solution(str) {
    let array = [...str]
    let num = array.length;
    if (array.length % 2 === 1) {
        return array[Math.floor(num/2)];
    } else {
        return array[num/2 - 1] + array[(num/2)];
    }
}