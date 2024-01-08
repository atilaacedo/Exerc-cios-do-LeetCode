/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let wordsInSameRow = [];
    let keyBoardWords = ["qwertyuiop","asdfghjkl","zxcvbnm"];
  
    for(var i = 0; i < words.length; i++){
       
        for(var j =0; j < keyBoardWords.length; j++){
            let numsRows = 0;
            for(var k = 0; k < words[i].length; k++){
                if(keyBoardWords[j].includes(words[i].charAt(k).toLowerCase())){
                   
                    numsRows++;
                }
            }

            if(numsRows === 0)
                continue;
            else if(numsRows !== words[i].length)
                break;
            else{
                wordsInSameRow.push(words[i]);
                break;
            }

        }
    }


    return wordsInSameRow;
};


let words = findWords(["Hello","Alaska","Dad","Peace"]);

console.log(words);