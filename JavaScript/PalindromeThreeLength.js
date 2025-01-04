/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const letters = new Set();

    for(let l of s){
        letters.add(l);
    }

    let ans = 0;

    for(let l of letters){
        let i = -1;
        let j = 0;

        for(let k = 0; k < s.length; k++){
            if(s[k] === l){
                if(i === -1)
                    i = k;
                
                j = k;
            }
        }

        const between = new Set();

        for(let k = i + 1; k < j; k++){
            between.add(s.charAt(k));
        }

        ans += between.size;
    }


    return ans;

};