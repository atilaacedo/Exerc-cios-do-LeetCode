/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let maxContentChildren = 0;
    let indexJ = 0;
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    
    for(var i = 0; i < g.length; i++){
        for(var j = indexJ; j < s.length; j++) {
            if(g[i] <= s[j]){
                maxContentChildren++;
                if(indexJ < s.length-1)
                    indexJ = j + 1;
                else   
                    return maxContentChildren;  
                break;
            }
        }
    }


    return maxContentChildren;
};

let contentChildren = findContentChildren([10,9,8,7,10,9,8,7],[10,9,8,7]);
//7,8,9,10

console.log(contentChildren)