/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let ans = 0;

    for(const n of nums){
        const strN = n.toString();


        if(strN.length % 2 == 0)
            ans++;
    }

    return ans;
};