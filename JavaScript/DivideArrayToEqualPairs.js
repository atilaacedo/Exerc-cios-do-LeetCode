/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const targetPairs = nums.length / 2;
    let pairs = 0;

    const mapNums = new Map();

    for(const n of nums){
        mapNums.set(n,  (mapNums.get(n) ||  0) + 1);

        if(mapNums.get(n) === 2){
            pairs++;
            mapNums.delete(n);
        }
    }

    return targetPairs === pairs;
};