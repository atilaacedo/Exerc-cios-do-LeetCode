/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const missingAndRepeatedValues = [];
    const controlValues = new Set();
    const rangeGrid = Array.from({ length: grid.length * grid.length }, (v, i) => i + 1);
    const set = new Set(rangeGrid);

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            const val = grid[i][j];
            if(controlValues.has(val)){
                missingAndRepeatedValues.push(val);
            }
            controlValues.add(val);

            if(set.has(val)){
                set.delete(val);
            }
            
        }
    }

    missingAndRepeatedValues.push(set.values().next().value);

    return missingAndRepeatedValues;
};