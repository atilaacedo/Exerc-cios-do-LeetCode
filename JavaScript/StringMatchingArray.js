/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    const subsArray = [];

    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if(words[i].includes(words[j]) && j !== i){
                
                if(subsArray.indexOf(words[j]) === -1)
                    subsArray.push(words[j])
            }
        }
    }


    return subsArray;

};

