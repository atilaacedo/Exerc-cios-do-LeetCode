/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
    * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    let ans = 0;
    
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        const low = binarySearch(nums, lower - nums[i], left, right);
        const high = binarySearch(nums, upper - nums[i] + 1, left, right);


        ans+= high - low;
     
    }

    return ans;
};

const binarySearch = (nums, target, left, right) => {
    while(left <= right) {
        const mid = left + (Math.floor((right - left) / 2));

        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}