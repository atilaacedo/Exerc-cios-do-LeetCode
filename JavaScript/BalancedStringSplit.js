/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let ans = 0;
    let nr  = 0;
    let nl = 0;
    for(let i = 0; i < s.length; i++ ){
        if(s.charAt(i) === 'R'){
            nr++;
        }

        if(s.charAt(i) === 'L'){
            nl++;
        }

       
        if(nl !== 0 && nr !== 0 && nl === nr){
            ans++;
            nr = 0;
            nl = 0;
        }
    }

    return ans;
};