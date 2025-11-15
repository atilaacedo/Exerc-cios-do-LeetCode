/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const mat = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for(let i = 0; i < queries.length; i++){
        const [row1, col1, row2, col2] = queries[i];
        for(let r = row1; r <= row2; r++){
            for(let c = col1; c <= col2; c++){
                mat[r][c] += 1;
            }
        }
    }

    return mat;
};