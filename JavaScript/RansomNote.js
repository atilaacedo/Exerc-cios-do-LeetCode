/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    const ransomNoteCount = {};
    const magazineCount = {};

    for (const char of ransomNote) {
        ransomNoteCount[char] = (ransomNoteCount[char] || 0) + 1;
    }

    for (const char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }

    for(const char of ransomNote){
        if(!magazineCount[char] || magazineCount[char] < ransomNoteCount[char]){
            return false;
        }
    }


    return true;
};