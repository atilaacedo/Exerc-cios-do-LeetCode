/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const arrayNums = [];
    const arrayZero = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1] && nums[i] !== 0){
            arrayNums.push(nums[i] * 2);
            ++i;
            arrayZero.push(0);  
        }else if(nums[i] === 0){
            arrayZero.push(0);  
        }else{
            arrayNums.push(nums[i]);
        }
    }



    return arrayNums.concat(arrayZero);
};