/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const s = n.toString(2);
    let count = 0;
    for(let c of s){
        if(c === '1')
            count++;
    }

    return count;

};