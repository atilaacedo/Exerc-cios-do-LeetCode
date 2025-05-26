/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  
    let ans = 0;

    const map = new Map();

    for(const c of s){
        if(map.has(c)){
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }
    let isOdd = false;

    for(const [key, value] of map.entries()){

        if(value % 2=== 0){
            ans += value;
        }else{
            ans += value - 1 ;
            isOdd = true;
        }
    }

    if(isOdd)
        ans++;


    return ans;
    
};