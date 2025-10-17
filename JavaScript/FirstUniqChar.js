/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let firstChar = -1;

    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            firstChar = i;
            break;
        }
    }

    return firstChar;
};