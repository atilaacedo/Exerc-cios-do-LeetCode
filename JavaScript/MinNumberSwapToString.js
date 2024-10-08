/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    
    let swaps = 0;

    for(let i = 0; i < s.length; i++){
        s.charAt(i) === '[' ? swaps++ : swaps--;

        if(swaps < 0)
            swaps = 0;
    }

    return Math.floor((swaps + 1) /2);
};