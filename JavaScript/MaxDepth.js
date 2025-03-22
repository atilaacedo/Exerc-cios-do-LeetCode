/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxParOpen = 0;
    let parOpen = 0;

    for(const c of s){
        if(c === '('){
            parOpen++;
        }else if(c === ')'){
            parOpen--;
        }


        maxParOpen = Math.max(parOpen, maxParOpen);
    }

    return maxParOpen;
};