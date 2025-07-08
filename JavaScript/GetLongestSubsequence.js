/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
  
    
    const ans = [];
    let activeGroup = -1;


    for(let i = 0; i < words.length; i++){ 
        if(groups[i] !== activeGroup){
            ans.push(words[i]);
            activeGroup = groups[i];
        }
    }


    return ans;

};