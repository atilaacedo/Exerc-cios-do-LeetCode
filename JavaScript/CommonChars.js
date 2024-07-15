/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let commonCharsMap = new Map();
    let commonCharArr = [];
    for(let i = 0; i < words.length; i++){
        let auxMap = new Map();
        words[i].split("").forEach((letter) => {
            if(i === 0){
                if(commonCharsMap.has(letter)){
                    commonCharsMap.set(letter, commonCharsMap.get(letter) + 1)
                }else{
                    commonCharsMap.set(letter, 1);
                }
            }else{     
                if(auxMap.has(letter)){
                    auxMap.set(letter, auxMap.get(letter) + 1)
                }else{
                    auxMap.set(letter, 1);
                }
            }
        });

        if(i !== 0){
            for(let [key,value] of commonCharsMap){
                if(!auxMap.has(key)){
                    commonCharsMap.delete(key);
                }else{
                    if(auxMap.get(key) < commonCharsMap.get(key)){
                        commonCharsMap.set(key, auxMap.get(key))
                    }
                }
            }
        }
    }

    for(let [key,value] of commonCharsMap){
        for(let i = 0; i < commonCharsMap.get(key); i++){
            commonCharArr.push(key)        
        }
    }

    return commonCharArr;
    
};

commonChars(["cool","lock","cook"])