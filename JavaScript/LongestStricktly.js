/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let nI = 1;
    let nD = 1;
    let maxLength = 1;


    for(let i = 0; i < nums.length-1; i++){
        if(nums[i+1] > nums[i]){
            nI++;
            nD = 1;
        }else if(nums[i+1] < nums[i]){
            nD++;
            nI = 1;
        }else{
            nD = 1;
            nI = 1;
        }

        maxLength = Math.max(maxLength, Math.max(nD, nI));
    }


    return maxLength;
};