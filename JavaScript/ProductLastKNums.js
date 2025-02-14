let nums = [];

var ProductOfNumbers = function() {
    nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    nums.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let prod = 1;

    let index = nums.length-1;
    for(let i = 0; i < k; i++){
        prod*=nums[index]
        index--;
    }

    return prod;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */