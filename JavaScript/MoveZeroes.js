/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = 0;
    for(let i = 0; i < nums.length; i++) {
        n = nums[i];
        if(n === 0){
            zeroes++;
            nums.splice(i, 1);
            i--;
        }
    };
    console.log(nums);
    for(let i = 0; i < zeroes; i++){
        nums.push(0);
    }
};