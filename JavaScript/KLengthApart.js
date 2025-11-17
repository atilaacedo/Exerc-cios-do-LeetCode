/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let count = 0;
    let hasOne = false;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            if(count < k && hasOne)
                return false;

            hasOne = true;
            count = 0;
            continue;
        }

        count++;
    }


    return true;
};