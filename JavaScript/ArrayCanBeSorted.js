/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    const countBits = (num) => (num.toString(2).match(/1/g) || []).length;

    const mapBits = nums.map(countBits);

    let swapped;

    do{
        swapped = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (mapBits[i] === mapBits[i + 1] && nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                swapped = true;
            }
        }
    }while(swapped);


    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }


    return true;
};