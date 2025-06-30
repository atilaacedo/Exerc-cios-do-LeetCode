/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let ans = 0;

    const count = {};

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const num of Object.keys(count)) {
        const n = parseInt(num);

        if (count[n + 1]) {
            ans = Math.max(ans, count[n] + count[n + 1]);
        }
    }


    return ans;
};