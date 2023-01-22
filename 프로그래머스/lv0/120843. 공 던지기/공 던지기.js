const solution = (nums, a) => {
    let count = 0;
    for (let i = 0; i < a - 1; i++) {
        count += 2;
        if (count > nums.length) {
            count -= nums.length;
        }
    }
    return nums[count];
};