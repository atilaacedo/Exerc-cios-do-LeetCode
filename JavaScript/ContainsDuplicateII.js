/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let mapNums = new Map();
    let containsDuplicate = false;
    for(let i = 0; i < nums.length; i++){
        if(!mapNums.has(nums[i])){
            mapNums.set(nums[i], i);
            continue;
        }

        let map = mapNums.get(nums[i]);
        
        containsDuplicate = Math.abs(map - i) <= k;
        if(containsDuplicate){
            break;
        }
        mapNums.delete(nums[i]);
        mapNums.set(nums[i], i);
    }

    return containsDuplicate;
};

console.log(containsNearbyDuplicate([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1))