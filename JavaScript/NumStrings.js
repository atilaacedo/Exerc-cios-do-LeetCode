/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    let num = 0;
    for(const pattern of patterns){
        if(word.includes(pattern))
            num++;
    }

    return num;
};