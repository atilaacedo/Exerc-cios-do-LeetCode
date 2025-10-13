/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = [];
    let lastWord = '';
    for(let i = 0; i < words.length; i++) {
        const sorted = words[i].split('').sort().join('');
        
        if(sorted !== lastWord) {
            result.push(words[i]);
            lastWord = sorted;
        }

    }

    return result;
};