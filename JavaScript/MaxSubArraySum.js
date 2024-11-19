var maximumSubarraySum = function(nums, k) {
    let maxSum = 0; 
    let currentSum = 0; 
    const elementCount = new Map(); 

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        elementCount.set(nums[right], (elementCount.get(nums[right]) || 0) + 1);

       
        if (right - left + 1 > k) {
            currentSum -= nums[left];
            elementCount.set(nums[left], elementCount.get(nums[left]) - 1);
            if (elementCount.get(nums[left]) === 0) {
                elementCount.delete(nums[left]);
            }
            left++;
        }

        if (right - left + 1 === k && elementCount.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};
