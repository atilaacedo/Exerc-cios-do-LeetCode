/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let ans = 0;


    for(let i = 0; i < nums.length - 1; i++){
        let dis = Math.abs(nums[i] - nums[i + 1]);

        ans = Math.max(ans, dis);
    }

    ans = Math.max(ans, Math.abs(nums[0] - nums[nums.length - 1]));



    return ans;
};