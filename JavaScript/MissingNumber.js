/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;

};
