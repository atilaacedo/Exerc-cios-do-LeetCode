/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {   
    if(nums.length < k * 2) 
        return false;

    for(let i = 0; i <= nums.length - k * 2; i++) {
        if(isIncreasing(nums, i, k) && isIncreasing(nums, i + k, k))
            return true;
    }
    return false;
};

const isIncreasing = (arr, start, k) => {
    for(let i = start; i < start + k - 1; i++) {
        if(arr[i] >= arr[i + 1]) 
            return false;
    }
    return true;
}
