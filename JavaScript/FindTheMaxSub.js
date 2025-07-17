/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {

    let ans = 0;

    const dp = Array.from({length: 2}, () => new Array(2).fill(0));

    for(let i = 0; i < nums.length; i++) {
        const resto = nums[i] % 2;

        for(let j = 0; j < 2; j++) {
            dp[j][resto] = dp[resto][j] + 1;
        
            ans = Math.max(ans, dp[j][resto]);
        } 
    }

    return ans;
};