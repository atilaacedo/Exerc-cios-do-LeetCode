/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const nums = [];

    for(let i = 1; i <=n; i++){
        if(!i.toString().includes('0') && !(n-i).toString().includes('0')){
            nums.push(i);
            nums.push(n-i);
            break;
        }
    }

    return nums;
};