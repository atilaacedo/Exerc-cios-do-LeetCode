/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const textArr = text.split(' ');
    let nTexts = 0;
    let canType = true;
    for(let i = 0; i < textArr.length; i++){
        for(let j = 0; j < brokenLetters.length; j++){
            if(textArr[i].includes(brokenLetters.charAt(j)))
                canType = false
        }

        if(canType)
            nTexts++;

        canType = true;
    }


    return nTexts;
};