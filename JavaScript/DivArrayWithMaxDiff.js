/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    
    const ans = [];

    nums.sort((a, b) => a - b);

    let j = 0;
    let index =  0;
    let firstElement = nums[0];
    let lastElement = nums[2];
  
    ans.push([]);

    if((lastElement - firstElement) > k)
        return [];

    for(const n of nums){
        if(j % 3 === 0 && j !== 0){
            firstElement = nums[j];
            lastElement = nums[j + 2];

            if((lastElement - firstElement) > k){
               
                return [];
            }

            ans.push([]);
            index++;
        }

        ans[index].push(n);

        j++;
    }

    return ans;
};