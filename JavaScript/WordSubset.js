/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    
    const maxChar = new Array(26).fill(0);

    for(w2 of words2){
        const tempCharFreq = new Array(26).fill(0);

        for(const char of w2){
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let i = 0; i < 26; i++){
            maxChar[i] = Math.max(maxChar[i], tempCharFreq[i]);
        }
    }

    const ans = [];

    for(w1 of words1){
        const tempCharFreq = new Array(26).fill(0);

        for(const char of w1){
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let isUniversal = true;

        for(let i = 0; i < 26; i++){
            if(maxChar[i] > tempCharFreq[i]){
                isUniversal = false;
                break;
            }
        }

        if(isUniversal)
            ans.push(w1);

    }

    return ans;
  
};

// /** Time Limit Exceeded    
//  * @param {string[]} words1
//  * @param {string[]} words2
//  * @return {string[]}
//  */
// var wordSubsets = function(words1, words2) {
    
//     const universalsStrings = [];

//     for(w1 of words1){
//         let isUniversal = true;
//         for(let i = 0; i < words2.length; i++){
//             let auxWord = w1;
//             for(let j = 0; j < words2[i].length; j++){
               
//                 if(!auxWord.includes(words2[i].charAt(j))){                    
//                     isUniversal = false;
//                     break;
//                 }else{
//                     let iW = auxWord.indexOf(words2[i].charAt(j));
//                     auxWord = auxWord.substring(0, iW) + auxWord.substring(iW + 1, auxWord.length);
//                 }
//             }

//             if(i === words2.length - 1 && isUniversal)
//                 universalsStrings.push(w1);
//         }
//     }

//     return universalsStrings;

// };