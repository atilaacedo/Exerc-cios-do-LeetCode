/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let mapNums = new Map();
    let lenghtArr = nums.length;
    let minOperations = 0;
    for(let n of nums){
        mapNums.set(n,  (mapNums.get(n) || 0) +1);
    }

   for(let [key, value] of mapNums.entries()){
        if(value === 1)
            return -1;

            minOperations += Math.floor(value / 3);
            if (value % 3 !== 0) 
                minOperations++;
   }

   return  minOperations ;
};

let num =  minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]);

console.log(num);