/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if( n === 1)
        return true;

    for(let i = 1; i <= n; i++){
        if(Math.pow(3, i) > n)
            return false;

        if(Math.pow(3, i) === n)
            return true;
    }

    return false;
};