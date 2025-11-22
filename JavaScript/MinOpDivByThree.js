/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let op = 0;
    for(let n of nums){
        let aux = n;
        while(n % 3 !== 0 && aux % 3 !== 0){
            n--;
            aux++;
            op++;
        }
    }


    return op;
};