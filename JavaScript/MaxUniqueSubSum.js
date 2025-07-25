/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    nums.sort((a,b) => b-a);

    const set = new Set();
    let maxSum = nums[0];
    set.add(nums[0]);

    for(const n of nums){
        if(!set.has(n) && n >= 0){
            set.add(n);
            maxSum += n;
        }
    }

    return maxSum;

};