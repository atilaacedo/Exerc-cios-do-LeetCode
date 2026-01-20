/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
   
    for (let j = 1; j < nums[i]; j++) {
      let op = j | (j + 1);
      if (op === nums[i]) {
        ans.push(j);
        break;
      }else if(j === nums[i] - 1){
        ans.push(j);
      }
    }
  }

  return ans;
};
