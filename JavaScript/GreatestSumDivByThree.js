/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let maxSum  = 0;
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const remainder = totalSum % 3;

    if (remainder === 0) {
        return totalSum;
    }

    const mod1 = [];
    const mod2 = [];

    for (const num of nums) {
        if (num % 3 === 1) {
            mod1.push(num);
        } else if (num % 3 === 2) {
            mod2.push(num);
        }
    }
    mod1.sort((a, b) => a - b);
    mod2.sort((a, b) => a - b);
    if (remainder === 1) {
        const option1 = mod1.length >= 1 ? totalSum - mod1[0] : 0;
        const option2 = mod2.length >= 2 ? totalSum - mod2[0] - mod2[1] : 0;
        maxSum = Math.max(option1, option2);
    } else if (remainder === 2) {
        const option1 = mod2.length >= 1 ? totalSum - mod2[0] : 0;
        const option2 = mod1.length >= 2 ? totalSum - mod1[0] - mod1[1] : 0;
        maxSum = Math.max(option1, option2);
    }
    


    return maxSum;
};