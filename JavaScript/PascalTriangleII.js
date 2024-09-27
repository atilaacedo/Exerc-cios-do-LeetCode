/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [];
    row.push(1);
    let prev = 1;
    for(let i = 1; i <= rowIndex; i ++){
        let next = prev * (rowIndex - i + 1) / i;

        row.push(next);
        prev = next;
    }

    return row;
};