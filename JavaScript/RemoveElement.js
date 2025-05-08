/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = nums.length - 1; i >= 0; i--){
        const n = nums[i];
        if(n === val){
            nums.splice(i, 1);
        }
    }

    console.log(nums);

    return nums.length;
};