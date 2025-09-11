/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let ans = '';

    const vowels = [];
    for (let i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            vowels.push(s[i]);
        }
    }

    vowels.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    let j = 0;

    for(let i = 0; i < s.length; i++){
        if('aeiouAEIOU'.includes(s[i])){
            ans += vowels[j];
            j++;
            continue;
        }

        ans+= s[i]
    }

    return ans;
};