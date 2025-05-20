/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {

    const aux = new Array(nums.length+1).fill(0);

    for(const [l, r] of queries){
        aux[l] += 1;
        aux[r+1] -= 1;
    }

    const countOp = []; 
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += aux[i];
        countOp.push(sum);
    }

    return nums.every((num, i) => countOp[i] >= num);


};