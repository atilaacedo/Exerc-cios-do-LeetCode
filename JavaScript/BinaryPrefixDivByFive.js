/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];  
    let mod = 0;
    for(const n of nums){
        mod =  ((mod << 1) + n) % 5;

        result.push(mod === 0);
    }


    return result;
};