/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    
    let ans = 0;
    
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const sum = nums[left] + nums[right];

        if(sum < target) {
            ans += right - left;
            left++;
        } else {
            right--;
        }
    }
        

    return ans;
};