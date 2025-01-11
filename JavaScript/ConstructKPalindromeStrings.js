/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    
    if(s.length < k)
        return false;
    if(s.length === k)
        return true;



    const freq = {};
    let oddCount = 0;


    for(let c of s){
        freq[c] = (freq[c] || 0) + 1; 
    }


    for(const count of Object.values(freq)){
        if(count%2==1){
            oddCount++;
        }
    }


    return oddCount <= k;
};