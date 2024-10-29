/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let longestStreak = 0;
    nums.sort((a,b) => a-b);

    const procNumbers = new Set(nums);

    for(let n of nums){
        let streak = 1;
        let target = n ;
        while(procNumbers.has(target  * target) && target * target < 1e5){
            target = target * target;
            streak++;
        }

        if(streak >= 2)
            longestStreak = Math.max(longestStreak, streak);
        
        
    }
   
    return longestStreak < 2 ? -1 : longestStreak;
};