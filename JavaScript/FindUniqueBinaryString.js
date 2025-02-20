

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
    let ans = "";

    for(let i = 0; i < nums.length; i++){
        nums[i].charAt(i) === '1' ? ans+='0' : ans+='1';
    }


    return ans;
};


