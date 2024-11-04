/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
    let count = 0;
    for(let i = 0; i < word.length; i++){

        count++;
        if(i < word.length -1 && word.charAt(i) !== word.charAt(i+1) || count === 9){
            comp+= count.toString() + word.charAt(i);
            count = 0;
        }

        if(i === word.length-1 && count !== 0){
            comp+= count.toString() + word.charAt(i);
        }
    }
    
    return comp;
};