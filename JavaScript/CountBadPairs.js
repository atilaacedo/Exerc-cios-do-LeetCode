/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let badPairs = 0;
    const diffCount = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = i - nums[i];

        let goodPairs = diffCount.get(diff) || 0;

        badPairs += i - goodPairs;
        diffCount.set(diff, goodPairs + 1);
    }

    return badPairs;
};