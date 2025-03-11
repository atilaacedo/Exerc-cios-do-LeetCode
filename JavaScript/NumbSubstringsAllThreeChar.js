/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = {'a' : 0, 'b' : 0, 'c' : 0};
    let ans = 0;
    let j = 0;

    for(let i = 0; i < s.length; i++){
        count[s[i]]++;


        while(count['a'] > 0 && count['b'] > 0 && count['c'] > 0){
            ans += s.length - i;
            count[s[j]]--;
            j++;
        }
    }
    return ans;
};