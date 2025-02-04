/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    
    let maxSum = nums[0];
    let maxSumAux = nums[0];

    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] < nums[i+1]){
            maxSumAux += nums[i+1];
        }else{
            
            maxSumAux = nums[i+1];
        }

        maxSum = Math.max(maxSum, maxSumAux);
    }

    return maxSum;
    
};