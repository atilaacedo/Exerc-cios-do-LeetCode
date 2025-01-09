/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;

    for(let word of words){
        if(word.substring(0, pref.length) === pref)
            count++;
    }

    return count;
};