/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {

    const map = new Map();

    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[r].length; c++){
            map.set(mat[r][c], [r, c]);
        }
    }
    const rowPainted = new Array(mat.length).fill(0);
    const colPainted = new Array(mat[0].length).fill(0);

    for(let i = 0; i < arr.length; i++){
        const pos = map.get(arr[i]);

        const row = pos[0];
        const col = pos[1];

        rowPainted[row]++;
        colPainted[col]++;

        if(rowPainted[row] === mat[0].length || colPainted[col] === mat.length)
            return i;
    }

    return -1;
};

