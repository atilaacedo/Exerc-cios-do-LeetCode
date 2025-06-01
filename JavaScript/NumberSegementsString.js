/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    let ans = 0;

    let isSegment = false;

    for(const c of s){
        if(c.charCodeAt(0) === 32){
            isSegment = false;
        }else{
            if(!isSegment){
                ans++;
                isSegment = true;
            }

        }
    }  


    return ans;

};