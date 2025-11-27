/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(!digits.length)
        return [];

    const ans = [];
    const mapLetters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];


    const backtrack = (i, combination) => {
        if(i === digits.length){
            ans.push(combination);
        }

       const idxDigit = parseInt(digits.charAt(i)) - 2;
       
        for(const digit of mapLetters[idxDigit]){
            backtrack(i + 1, combination + digit);
        }
    }

    backtrack(0,"");

    return ans;
};