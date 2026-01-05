/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  let maxSum = 0;
  let negativeNums = 0;
  let minAbsValue = Infinity;
  for (let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if (matrix[i][j] < 0) negativeNums++;
      
      maxSum += Math.abs(matrix[i][j]);
      
      if(Math.abs(matrix[i][j]) < minAbsValue) minAbsValue = Math.abs(matrix[i][j]);
    }
  }
  
  if(negativeNums % 2 !== 0){
    maxSum -= 2 * minAbsValue;
  }
  
  return maxSum;
};
