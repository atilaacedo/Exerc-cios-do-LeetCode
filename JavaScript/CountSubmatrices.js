/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let countOnes = 0;
    let rows = mat.length;
    let cols = mat[0].length;

    let heights = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            mat[i][j] === 1 ? heights[i][j] = (i === 0 ? 1 : heights[i - 1][j] + 1) : heights[i][j] = 0;
        }
    }

    for( let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(heights[i][j] > 0){
                let min = heights[i][j];
                for (let k = j; k < cols; k++) {
                    if (heights[i][k] === 0) 
                        break;
                    min = Math.min(min, heights[i][k]);
                    countOnes += min;
                }
            }
        }
    }

    
    return countOnes;
};