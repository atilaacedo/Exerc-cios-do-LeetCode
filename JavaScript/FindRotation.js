/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    

    let isEqual = true;
    let oneRotations = true;
    let twoRotations = true;
    let threeRotations = true;


    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] !== target[i][j]) {
                isEqual = false;
            }

            if(mat[i][j] !== target[j][mat[i].length - 1 - i]) {
                oneRotations = false;
            }

            if(mat[i][j] !== target[mat.length - 1 - i][mat[i].length - 1 - j]) {
                twoRotations = false;
            }

            if(mat[i][j] !== target[mat.length - 1 - j][i]) {
                threeRotations = false;
            }

           
        }
    }


    return isEqual|| oneRotations || twoRotations || threeRotations; 
};