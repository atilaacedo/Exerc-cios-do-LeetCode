/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arrSquareNums = nums.map((n) => n*n);
    
    return arrSquareNums.sort((a,b) => a-b);
};

console.log(sortedSquares([-4,-1,0,3,10]))