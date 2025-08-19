/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    
    let count = 0;
    let currentZero = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            currentZero++;
            count += currentZero;
        }else{
            currentZero = 0;
        }


    }

    return count;
};