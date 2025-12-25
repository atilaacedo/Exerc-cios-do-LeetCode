/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  let ans = 0;
  
  happiness.sort((a, b) => b - a);
  
  for (let i = 0; i < k; i++){
    if (happiness[i] < 0)
      break;
    
    ans += happiness[i];
    
    if(i < happiness.length - 1)
      happiness[i + 1] -= (i + 1);
  }
  
  return ans;
};
