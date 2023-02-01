function solution(before, after) {
    let beforeArray = before.split('').sort();
    let afterArray = after.split('').sort();
    
    for (let i =0; i<beforeArray.length; i++) {
        if (beforeArray[i] !== afterArray[i]) {
            return 0;
        }
    }
    return 1;
}