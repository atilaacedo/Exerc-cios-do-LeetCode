/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums)  {

    const n = nums.length;
    const ans = new Array(n);
    
    const MAX_BITS = 30;

    const lastOccurrence = new Array(MAX_BITS).fill(-1);

    for(let i = n -1; i >=0; i--){
        for(let j = 0; j <MAX_BITS; j++){
            if((nums[i] >> j) & 1) {
                lastOccurrence[j] = i;
            }
        }

        let maxReach = i;

        for(let j = 0; j < MAX_BITS; j++){
            maxReach = Math.max(maxReach, lastOccurrence[j]);
        }

        ans[i] = (maxReach - i + 1);
    }


    return ans;
}