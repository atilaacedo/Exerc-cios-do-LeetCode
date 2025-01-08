/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    
    let pairs = 0;

    for(let i = 0; i < words.length-1; i++){
        for(let j = i+ 1; j < words.length; j++){
            if(isPrefixAndSuffix(words[i], words[j]))
                pairs++;
        }
    }

    return pairs;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

const isPrefixAndSuffix = (str1, str2) => {

    if(str1.length > str2.length)
        return false;

    return str2.substring(0,str1.length) === str1 && str2.substring(str2.length - str1.length, str2.length) === str1;
}

