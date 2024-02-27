/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }

    const rows = [[]];
    let indexRow = 0;
    let increments = true;
    for(let i = 0; i < s.length; i++){
        if(!rows[indexRow])
            rows[indexRow] = [];

        rows[indexRow].push(s.charAt(i))
        
        increments ? indexRow++ : indexRow--;

        if((indexRow === 0 && i !== 0) || indexRow === numRows-1)
            increments = !increments;
    }

    return rows.reduce((prev, curr) => prev.concat(curr, [])).join('');
};

console.log(convert("PAYPALISHIRING", 4))