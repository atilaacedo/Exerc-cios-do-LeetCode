/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    
    let matrix2D = [];
    let mapNums = new Map();
    let tamArr2d = 0;
    for (let num of nums) {
        let tam = (mapNums.get(num) || 0) + 1;
        mapNums.set(num, tam);
        if(tam > tamArr2d){
            tamArr2d = tam;
        }
    }


    for(var i = 0; i < tamArr2d; i++){
        matrix2D[i] = [];
        for(var j = 0; j < nums.length; j++){
            if(!matrix2D[i].includes(nums[j]) && nums[j] !== -1){
                matrix2D[i].push(nums[j]);
                nums[j] = -1;
            }
        }
        
    }
   
    return matrix2D;
};

