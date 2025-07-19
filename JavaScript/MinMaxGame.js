/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    if(nums.length === 1)
        return nums[0];

    let tam = nums.length / 2
    let newNums = [];

    

    while(tam > 1){

        for(let i = 0; i < tam; i++){
            if(i % 2 === 0) {
                newNums.push(Math.min(nums[2 * i], nums[2 * i + 1]));
            } else {
                newNums.push(Math.max(nums[2 * i], nums[2 * i + 1]));
            }
        }
        tam = newNums.length / 2;
        nums = newNums;
        newNums = [];
    }


    return Math.min(nums[0], nums[1]);
};