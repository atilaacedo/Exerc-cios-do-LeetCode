/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {

    let ans = 0;

    const dp = Array.from({length: k}, () => new Array(k).fill(0));

    for(let i = 0; i < nums.length; i++) {
        const resto = nums[i] % k;

        for(let j = 0; j < k; j++) {
            dp[j][resto] = dp[resto][j] + 1;
            ans = Math.max(res, dp[j][resto]);
        }
    }

    return ans;
};