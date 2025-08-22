/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let minRow = Infinity;
    let maxRow = -1;
    let minCol = Infinity;
    let maxCol = -1;

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            const cel = grid[row][col];

            if(cel === 1){
                minRow = Math.min(minRow, row);
                maxRow = Math.max(maxRow, row);
                minCol = Math.min(minCol,col);
                maxCol = Math.max(maxCol, col);
            }
        }
    }

    if(minRow === Infinity)
        return 0;

    return (maxRow - minRow + 1) * (maxCol - minCol +1);
}; 