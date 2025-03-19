/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let flips = 0; 
    const aux = [1,0];

    for(let i = 2; i < nums.length; i++){
        if(nums[i-2] === 0){
            nums[i-2] = aux[nums[i-2]];
            nums[i-1] = aux[nums[i-1]];
            nums[i] = aux[nums[i]];
            flips++;
        }
    }

    if(!nums.every((n) => n==1))
        return -1;
    return flips;
};