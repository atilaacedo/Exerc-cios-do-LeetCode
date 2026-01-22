/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let ans = 0;

  while (nums.length > 1) {
    let isNonDecreasing = true;
    let minPairSum = Infinity;
    
    let index = -1;

    for(let i = 0; i < nums.length -1; i++){
      const pairSum = nums[i] + nums[i+1];
      
      if(nums[i] > nums[i+1]){
        isNonDecreasing = false;
      }
      
      if(pairSum < minPairSum){
        minPairSum = Math.min(minPairSum, pairSum);
        index = i;
      }
    }
    
    
    if (isNonDecreasing) break;
    
    ans++;
    nums[index] = minPairSum;
    nums.splice(index + 1, 1);
  }

  return ans;
};
