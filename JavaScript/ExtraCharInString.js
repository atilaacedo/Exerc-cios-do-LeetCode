/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let extraChars = s.length;
    console.log(s.length);
    dictionary.forEach((word) => {
        let wordLength = word.length;
        let aux = wordLength; 
        for(let i = 0; i < s.length; i++){
            subWord = s.substring(i, aux++);
            if(word === subWord){
                extraChars -= wordLength;
                s = s.substring(0, i) + s.substring(i + wordLength);
                console.log(s);
                console.log(word)
            }
        }
    })

    return extraChars;

};