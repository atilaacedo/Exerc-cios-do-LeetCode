/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {

    let maxDiff = nums[1] - nums[0];

    const visited = new Set();
    visited.add(nums[0]);

    for(let i= 1; i < nums.length; i++){

        visited.forEach((num) => {
            maxDiff = Math.max(maxDiff, nums[i] - num);
        });
        
        visited.add(nums[i]);
    }


    return maxDiff;
};