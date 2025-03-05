/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    if(n === 1)
        return 1;

    let coloredCells = 1;
    aux = 0;
    for(let i = 0; i < n; i++){
        coloredCells += aux;
        aux+=4;
    }

    return coloredCells;
};