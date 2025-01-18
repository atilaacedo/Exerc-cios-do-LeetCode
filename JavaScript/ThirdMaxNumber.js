/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    nums.sort((a,b) => b-a);

    const set = new Set();

    for(let n of nums){
        set.add(n);
    }


    return set.size >= 3 ? Array.from(set)[2] : Array.from(set)[0]

};