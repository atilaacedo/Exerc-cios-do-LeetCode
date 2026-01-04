/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let sum = 0;
  
  for(const n of nums){
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        divisors.push(i);
        if(i !== n / i) divisors.push(n / i);
      }
    }
    if(divisors.length === 4) sum += divisors.reduce((a, b) => a + b);
  }
  
  return sum;
};
