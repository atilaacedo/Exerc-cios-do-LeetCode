/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let j =0; 
    let i =  height.length -1;
    let maxArea = 0;

    while(j < i){
        let area = Math.min(height[j], height[i]) * (i-j);
        maxArea = Math.max(area, maxArea);
        if(height[j] <= height[i]){
            j++;
        }else{
            i--;
        }
    }

    return maxArea;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49
console.log(maxArea([1,2,1])); //2
console.log(maxArea([1,1])); //1
console.log(maxArea([1,2]));//1