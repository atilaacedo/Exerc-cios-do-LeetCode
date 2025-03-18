/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let max = 1;

    for(let i = 0; i  < nums.length - max; i++){
        let currentLenght = 1;
        let bit = nums[i];

        for(let j = i +1; j < nums.length; j++){
               
            if((bit & nums[j]) === 0){
                bit |= nums[j];
                currentLenght++;
               
            }else{
                break;
            }
        }

        max = Math.max(max, currentLenght);
    }


    return max;
};


console.log(longestNiceSubarray([1,3,8,48,10]))