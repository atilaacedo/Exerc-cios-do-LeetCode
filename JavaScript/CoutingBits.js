/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = [];
    for(let i = 0; i <= n; i++){
        const bin = [...i.toString(2).matchAll(/1/g)];

        ans.push(bin.length);
    }


    return ans;
};