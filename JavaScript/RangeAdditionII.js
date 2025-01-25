/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    
   const matrix = [m,n];

    for(const op of ops){
        const [x, y] = op;

        if(x < matrix[0])
            matrix[0] = x;
        if(y < matrix[1])
            matrix[1] = y;
    }

    return matrix[0]*matrix[1];
};