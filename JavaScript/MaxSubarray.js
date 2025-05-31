/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let aux = 0;
    

    for(const n of nums){
        aux += n;

        if(aux <= 0)
            aux = 0;


        sum = Math.max(aux, sum);
    }

    return sum;
};